import KpiCard from "@/components/KpiCard";
import brandLogo from "@/assets/la-serena-logo.jpg";
import ConversionsTable from "@/components/ConversionsTable";
import AgeChart from "@/components/AgeChart";
import PostsTable from "@/components/PostsTable";
import CitiesTable from "@/components/CitiesTable";
import ReelsKpis from "@/components/ReelsKpis";
import StoryKpis from "@/components/StoryKpis";
import DeliveryFunnel from "@/components/DeliveryFunnel";
import GetInReservations from "@/components/GetInReservations";
import { Megaphone, Instagram, Activity, Calendar, TrendingUp, ShoppingBag, CalendarCheck } from "lucide-react";


const SectionHeader = ({
  icon: Icon,
  title,
  subtitle,
  code,
}: {
  icon: typeof Instagram;
  title: string;
  subtitle: string;
  code: string;
}) => (
  <div className="flex items-end justify-between mb-5 pb-4 border-b border-border">
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 shadow-glow">
        <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-heading font-semibold text-foreground tracking-tight">
          {title}
        </h2>
        <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-0.5">{subtitle}</p>
      </div>
    </div>
    <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">
      § {code}
    </span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Brand banner - cinematic header */}
      <header className="relative overflow-hidden border-b border-border">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        {/* Brand pink glow blob */}
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-brand/20 blur-[120px]" />
        {/* Cyan glow blob */}
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        {/* Subtle scanline */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
          {/* Top bar with brand mark + status */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              {/* Brand logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-brand/30 blur-2xl rounded-full" />
                <div className="relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl border border-brand/30 bg-card/40 backdrop-blur-sm shadow-[0_0_24px_hsl(var(--brand)/0.25)] overflow-hidden">
                  <img src={brandLogo} alt="La Serena" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-border" />
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Dashboard</span>
                <span className="text-sm font-heading font-semibold text-foreground">Performance</span>
              </div>
            </div>

            <div className="flex items-center rounded-full border-success/30 bg-success/10 border-0 px-0 py-0 gap-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-pulse-glow" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
            </div>
          </div>

          {/* Hero title + KPI strip */}
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary/80 mb-3 px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5">
                <TrendingUp className="h-3 w-3" />
                Análise de desempenho
              </div>
              <h1 className="text-4xl sm:text-6xl font-heading font-semibold tracking-tight leading-[1.05]">
                <span className="text-foreground">La Serena</span>
              </h1>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span className="number-display">01/05/2026 - 31/05/2026</span>
                <span className="text-muted-foreground/40">·</span>
                <span>vs. 01/04/2026 - 30/04/2026</span>
              </p>
            </div>

            {/* Hero KPI strip */}
            <div className="flex items-center gap-5 rounded-2xl border border-border glass px-5 py-4 shadow-card">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Alcance total IG</p>
                <p className="text-xl sm:text-2xl font-heading font-semibold text-foreground number-display">418.140</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Visualizações</p>
                <p className="text-xl sm:text-2xl font-heading font-semibold text-foreground number-display">801.749</p>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Cresc. alcance</p>
                <p className="text-xl sm:text-2xl font-heading font-semibold text-success number-display">+30,37%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 space-y-16">
        {/* INSTAGRAM */}
        <section>
          <SectionHeader
            icon={Instagram}
            title="Instagram · La Serena"
            subtitle="@laserena_sp - orgânico + pago"
            code=""
          />

          {/* Dados gerais Instagram (PDF) */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <KpiCard title="Seguidores" value="56.114" change={1.78} previousValue="55.135" highlight />
            <KpiCard title="Visitas ao perfil" value="40.730" change={28.74} previousValue="31.638" highlight />
            <KpiCard title="Alcance total (org+pago)" value="418.140" change={30.37} previousValue="320.736" highlight />
            <KpiCard title="Visualizações totais" value="801.749" change={37.63} previousValue="582.559" />
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 mt-3">
            <KpiCard title="Alcance orgânico" value="8.099" change={-32.18} previousValue="11.942" />
            <KpiCard title="Alcance pago" value="410.041" change={32.79} previousValue="308.794" />
            <KpiCard title="Interações totais" value="3.042" change={67.33} previousValue="1.818" />
            <KpiCard title="Postagens do feed" value="10" change={0} previousValue="10" />
          </div>

          {/* Cidades + Posts */}
          <div className="grid gap-4 lg:grid-cols-2 mt-6">
            <CitiesTable />
            <PostsTable />
          </div>

          {/* Reels + Stories */}
          <div className="space-y-4 mt-6">
            <ReelsKpis />
            <StoryKpis />
          </div>
        </section>

        {/* META ADS */}
        <section>
          <SectionHeader
            icon={Megaphone}
            title="Meta Ads · La Serena"
            subtitle="CA - La Serena - performance paga"
            code=""
          />

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <KpiCard title="Valor investido" value="R$ 3.029,81" change={83.19} previousValue="R$ 1.653,90" highlight />
            <KpiCard title="Impressões totais" value="603.150" change={43.12} previousValue="421.419" highlight />
            <KpiCard title="CTR (link)" value="4,38%" change={-4.53} previousValue="4,59%" />
            <KpiCard title="Frequência" value="1,42" change={2.44} previousValue="1,38" />
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 mt-3">
            <KpiCard title="CPC médio" value="R$ 0,11" change={34.06} previousValue="R$ 0,09" />
            <KpiCard title="CPM médio" value="R$ 5,02" change={28} previousValue="R$ 3,92" />
            <KpiCard title="Alcance total" value="425.900" change={39.72} previousValue="304.828" />
            <KpiCard title="Total de cliques" value="31.258" change={52.76} previousValue="20.462" />
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 mt-3">
            <KpiCard title="Cliques no link" value="26.407" change={36.65} previousValue="19.325" />
            <KpiCard title="Alcance no Instagram" value="425.900" change={39.72} previousValue="304.828" />
            <KpiCard title="Impressões no Instagram" value="603.150" change={43.12} previousValue="421.419" />
          </div>

          {/* Bento: conversions wide + age */}
          <div className="grid gap-4 lg:grid-cols-5 mt-6">
            <div className="lg:col-span-3">
              <ConversionsTable />
            </div>
            <div className="lg:col-span-2">
              <AgeChart />
            </div>
          </div>
        </section>

        {/* RESERVAS GETIN */}
        <section>
          <SectionHeader
            icon={CalendarCheck}
            title="Reservas · Get In"
            subtitle="Visão geral - 01/05/2026 - 31/05/2026"
            code=""
          />
          <GetInReservations />
        </section>

        {/* DELIVERY DIRETO */}
        <section>
          <SectionHeader
            icon={ShoppingBag}
            title="Delivery · La Serena"
            subtitle="Delivery Direto - últimos 30 dias"
            code=""
          />
          <DeliveryFunnel />
        </section>


        {/* Footer */}
        <footer className="pt-8 border-t border-border" />
      </main>
    </div>
  );
};

export default Index;
