import Container from "@/components/ui/Container";

interface SimplePageProps {
  title: string;
  description: string;
  body?: string;
}

export default function SimplePage({ title, description, body }: SimplePageProps) {
  return (
    <section className="flex w-full justify-center pt-28 pb-24 md:pt-40 md:pb-32">
      <Container className="flex max-w-3xl flex-col items-start gap-6">
        <h1 className="text-[40px] font-semibold leading-[1.05em] tracking-[-0.045em] md:text-[52px]">
          {title}
        </h1>
        <p className="text-[18px] leading-[1.45em] text-muted-foreground">
          {description}
        </p>
        {body && (
          <p className="text-[16px] leading-[1.65em] text-muted-foreground">{body}</p>
        )}
      </Container>
    </section>
  );
}