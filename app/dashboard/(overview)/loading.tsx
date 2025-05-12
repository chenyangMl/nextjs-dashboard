// loading.tsx 只是起到一个占位符的作用，动态加载的内容，用户会提前看到一个loading。
// 使用loadding skeletons来提升体验
// export default function Loading() {
//     return <div>Loading...</div>;
//   }

import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}