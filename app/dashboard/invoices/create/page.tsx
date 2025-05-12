// 导入创建发票表单组件
import Form from '@/app/ui/invoices/create-form';
// 导入面包屑导航组件
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// 导入获取客户数据的函数
import { fetchCustomers } from '@/app/lib/data';
 
// 定义创建发票页面组件
export default async function Page() {
  // 获取所有客户数据
  const customers = await fetchCustomers();
 
  return (
    <main>
      {/* 渲染面包屑导航 */}
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      {/* 渲染创建发票表单,并传入客户数据 */}
      <Form customers={customers} />
    </main>
  );
}