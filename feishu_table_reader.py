#!/usr/bin/env python3
"""
飞书多维表格数据访问脚本
需要飞书开放平台的 app_id 和 app_secret
"""

import requests
import json
import os
from typing import Dict, Any, Optional

class FeishuAPI:
    def __init__(self, app_id: str, app_secret: str):
        self.app_id = app_id
        self.app_secret = app_secret
        self.access_token = None
        self.base_url = "https://open.feishu.cn/open-apis"
    
    def get_tenant_access_token(self) -> bool:
        """获取租户访问令牌"""
        url = f"{self.base_url}/auth/v3/tenant_access_token/internal/"
        payload = {
            "app_id": self.app_id,
            "app_secret": self.app_secret
        }
        
        try:
            response = requests.post(url, json=payload)
            response.raise_for_status()
            data = response.json()
            
            if data.get("code") == 0:
                self.access_token = data.get("tenant_access_token")
                print(f"✅ 成功获取访问令牌")
                return True
            else:
                print(f"❌ 获取令牌失败: {data.get('msg')}")
                return False
        except Exception as e:
            print(f"❌ 请求异常: {e}")
            return False
    
    def get_app_table_info(self, app_token: str, table_id: str) -> Optional[Dict[str, Any]]:
        """获取应用表格信息"""
        if not self.access_token:
            if not self.get_tenant_access_token():
                return None
        
        url = f"{self.base_url}/bitable/v1/apps/{app_token}/tables/{table_id}"
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            data = response.json()
            
            if data.get("code") == 0:
                return data.get("data")
            else:
                print(f"❌ 获取表格信息失败: {data.get('msg')}")
                return None
        except Exception as e:
            print(f"❌ 请求异常: {e}")
            return None
    
    def get_table_records(self, app_token: str, table_id: str, page_size: int = 100) -> Optional[Dict[str, Any]]:
        """获取表格记录"""
        if not self.access_token:
            if not self.get_tenant_access_token():
                return None
        
        url = f"{self.base_url}/bitable/v1/apps/{app_token}/tables/{table_id}/records"
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }
        params = {
            "page_size": page_size
        }
        
        try:
            response = requests.get(url, headers=headers, params=params)
            response.raise_for_status()
            data = response.json()
            
            if data.get("code") == 0:
                return data.get("data")
            else:
                print(f"❌ 获取表格记录失败: {data.get('msg')}")
                return None
        except Exception as e:
            print(f"❌ 请求异常: {e}")
            return None

def parse_feishu_url(url: str) -> tuple:
    """解析飞书URL，提取app_token和table_id"""
    # 示例URL: https://o09zn2bdfc.feishu.cn/base/EnETbvJwDaDkV8sJDFEcrQjon9f?table=tbl5j64icKKRE1Zb&view=vew4H4LPnN
    try:
        # 提取app_token (base后面的部分)
        app_token = url.split('/base/')[1].split('?')[0]
        
        # 提取table_id
        table_param = url.split('table=')[1].split('&')[0]
        
        return app_token, table_param
    except Exception as e:
        print(f"❌ URL解析失败: {e}")
        return None, None

def main():
    """主函数"""
    # 飞书表格URL
    feishu_url = "https://o09zn2bdfc.feishu.cn/base/EnETbvJwDaDkV8sJDFEcrQjon9f?table=tbl5j64icKKRE1Zb&view=vew4H4LPnN"
    
    # 解析URL
    app_token, table_id = parse_feishu_url(feishu_url)
    if not app_token or not table_id:
        print("❌ 无法解析飞书URL")
        return
    
    print(f"📋 解析结果:")
    print(f"   App Token: {app_token}")
    print(f"   Table ID: {table_id}")
    
    # 检查环境变量中的凭据
    app_id = os.getenv("FEISHU_APP_ID")
    app_secret = os.getenv("FEISHU_APP_SECRET")
    
    if not app_id or not app_secret:
        print("❌ 缺少飞书开放平台凭据")
        print("请设置环境变量:")
        print("   export FEISHU_APP_ID='your_app_id'")
        print("   export FEISHU_APP_SECRET='your_app_secret'")
        print("\n或者直接在脚本中提供凭据")
        return
    
    # 创建API客户端
    feishu_api = FeishuAPI(app_id, app_secret)
    
    # 获取表格信息
    print(f"\n📊 获取表格信息...")
    table_info = feishu_api.get_app_table_info(app_token, table_id)
    
    if table_info:
        print(f"✅ 表格名称: {table_info.get('name')}")
        print(f"📝 表格描述: {table_info.get('description', '无描述')}")
        
        # 获取字段信息
        fields = table_info.get('fields', [])
        print(f"📋 字段数量: {len(fields)}")
        print("字段列表:")
        for field in fields:
            field_name = field.get('name', '未知')
            field_type = field.get('type', '未知')
            print(f"   - {field_name} ({field_type})")
    
    # 获取表格记录
    print(f"\n📄 获取表格记录...")
    records_data = feishu_api.get_table_records(app_token, table_id)
    
    if records_data:
        records = records_data.get('items', [])
        total_count = records_data.get('total', 0)
        print(f"📊 总记录数: {total_count}")
        print(f"📋 当前页记录数: {len(records)}")
        
        if records:
            print(f"\n📝 前5条记录预览:")
            for i, record in enumerate(records[:5]):
                print(f"   记录 {i+1}:")
                fields = record.get('fields', {})
                for key, value in fields.items():
                    print(f"      {key}: {value}")
                print()
        else:
            print("📝 表格中没有记录")
    else:
        print("❌ 无法获取表格记录")

if __name__ == "__main__":
    main()