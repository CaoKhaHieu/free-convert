import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <BaseTemplate>
      <div className="py-5">{props.children}</div>
    </BaseTemplate>
  );
}
