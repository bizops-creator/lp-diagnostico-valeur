import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ChevronDown, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Target, 
  Search,
  FileText,
  BarChart4,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  Settings,
  UserCheck,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
  Rocket,
  MousePointer2,
  Phone,
  Mail,
  Building2,
  Instagram,
  Youtube,
  Facebook,
  Music2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';

// Importando as imagens diretamente (estilo padrão do Vite/React)
import logo from './assets/logo.png';
import playbookCover from './assets/playbook_page-0001.jpg';
import felipeImg from './assets/felipe.png';
import luanImg from './assets/luan.png';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleCTA = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.open('https://calendly.com/felipeassis/60min', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.company && formData.teamSize) {
      setFormStatus('success');
      // Delay to show success state before redirecting
      setTimeout(() => {
        handleCTA();
      }, 1000);
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#328848]/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Logo */}
          <div className="mb-16">
            <img src={logo} alt="Valeur Consultoria" className="h-12 w-auto object-contain" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8">
                Estruture seu Comercial para <span className="text-[#328848]">gerar receita com previsibilidade.</span>
              </h1>
              <div className="space-y-6 text-lg md:text-xl text-slate-300 mb-10">
                <p>Há alguns anos, ter um time comercial estruturado era privilégio de grandes empresas.</p>
                <p className="text-[#C8E080] font-bold">Hoje, quem não estrutura seu comercial fica para trás.</p>
                <p>
                  A <span className="italic">Valeur Consultoria</span> aplicou o <span className="font-bold text-white">Método Empilhamento de Funil</span> em <span className="font-bold text-white">+200 empresas B2B</span>, criando <span className="font-bold text-white">máquinas comerciais previsíveis que não dependem do fundador.</span>
                </p>
              </div>
              <div className="space-y-4">
                <Button 
                  onClick={() => handleCTA()}
                  className="w-full md:w-auto bg-[#328848] hover:bg-[#214D2A] text-white font-black text-xl h-16 px-12 rounded-none shadow-[0_10px_30px_rgba(50,136,72,0.3)] uppercase tracking-widest transition-all active:scale-95"
                >
                  QUERO MEU DIAGNÓSTICO 360º GRATUITO
                </Button>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] md:ml-2">
                  G R A T U I T O &nbsp; · &nbsp; S E M &nbsp; C O M P R O M I S S O &nbsp; · &nbsp; 2 4 H
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#328848]/20 blur-3xl rounded-full group-hover:bg-[#328848]/30 transition-all duration-700" />
                <a 
                  href="/assets/playbook.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block"
                >
                  <img 
                    src={playbookCover} 
                    alt="Playbook Valeur e Diagnóstico 360º" 
                    className="w-full max-w-[450px] shadow-2xl transition-all duration-500 rounded-lg border border-white/10 group-hover:scale-[1.02] group-hover:border-[#328848]/50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg backdrop-blur-[2px]">
                    <div className="bg-[#328848] text-white px-6 py-3 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                       <FileText className="w-4 h-4" />
                       ABRIR PLAYBOOK PDF
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROVA SOCIAL NÚMERO */}
      <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-400 mb-6">
            A Valeur Consultoria estruturou operações comerciais que somadas geraram
          </h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black text-[#328848] mb-4"
          >
            +R$ 500 milhões
          </motion.h1>
          <p className="text-xl text-slate-400 mb-12">para nossos clientes em diferentes segmentos B2B</p>
          <p className="text-2xl font-bold text-slate-600 tracking-[0.5em]">. . . . . . . . . . . . . . . . .</p>
        </div>
      </section>

      {/* 3. RESULTADOS COMPROVADOS */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { val: "+200", title: "PROJETOS ENTREGUES", desc: "De estruturação comercial completa" },
              { val: "+1.000", title: "VENDEDORES FORMADOS", desc: "Com método, não com improviso" },
              { val: "+200", title: "GESTORES COMERCIAIS FORMADOS", desc: "Prontos para liderar times de alta performance" },
              { val: "+R$500M", title: "EM RECEITA ADICIONAL GERADA", desc: "Nas empresas que passaram pela Valeur" }
            ].map((item, i) => (
              <div key={i} className="bg-[#222] p-8 border-b-4 border-[#328848] hover:bg-[#2a2a2a] transition-colors text-center">
                <p className="text-4xl font-black text-[#328848] mb-2">{item.val}</p>
                <h3 className="text-xs font-black mb-4 uppercase tracking-widest text-white">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              onClick={() => handleCTA()}
              className="bg-[#328848] hover:bg-[#214D2A] text-white font-black text-lg h-16 px-12 rounded-none uppercase tracking-widest transition-all"
            >
              QUERO ESSES RESULTADOS
            </Button>
          </div>
        </div>
      </section>

      {/* 4. OS 20 PILARES */}
      <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#328848]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              Os 20 pilares do Método Empilhamento de Funil
            </h2>
            <h3 className="text-xl text-[#C8E080] font-bold">
              Diagnóstico completo de ponta a ponta do processo comercial da sua empresa
            </h3>
          </div>

          <div className="space-y-12 mb-16">
            {[
              {
                title: "BLOCO 1 - ESTRATÉGIA & POSICIONAMENTO",
                items: [
                  "01. Estrutura organizacional",
                  "02. Esteira de produtos",
                  "03. Perfil de cliente ideal",
                  "04. Proposta única de valor",
                  "05. Modelo de remuneração e política comercial"
                ]
              },
              {
                title: "BLOCO 2 - AQUISIÇÃO & PROSPECÇÃO",
                items: [
                  "06. Canal de aquisição",
                  "07. Ferramentas de Sales, engagement e prospecção",
                  "08. Cadência de atendimento e prospecção",
                  "09. Scripts de pré-vendas",
                  "10. Critérios de qualificação e passagem de bastão"
                ]
              },
              {
                title: "BLOCO 3 - VENDAS & FECHAMENTO",
                items: [
                  "11. Estrutura de CRM",
                  "12. Apresentação de vendas — sistema único de fechamento em reunião",
                  "13. Scripts de vendas — condução, contorno de objeção e fechamento"
                ]
              },
              {
                title: "BLOCO 4 - PESSOAS & CULTURA",
                items: [
                  "14. Processos de recrutamento e seleção",
                  "15. Onboarding e treinamento",
                  "16. Acompanhamento e feedbacks",
                  "17. Plano de carreira",
                  "18. Rituais comerciais",
                  "19. Dashboard de métricas",
                  "20. Cultura de alta performance"
                ]
              }
            ].map((bloco, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-none">
                <h4 className="text-[#328848] font-black text-lg mb-6 tracking-widest">{bloco.title}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {bloco.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-[#328848] flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => handleCTA()}
              className="bg-[#328848] hover:bg-[#214D2A] text-white font-black text-lg h-16 px-12 rounded-none uppercase tracking-widest transition-all"
            >
              AGENDAR MEU DIAGNÓSTICO
            </Button>
          </div>
        </div>
      </section>

      {/* 5. CASO REAL - DESTAQUE */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#328848] mb-4">Mais de 200 projetos entregues. Aqui está um resultado.</h2>
          </div>

          <div className="bg-slate-50 border-2 border-slate-100 p-8 md:p-16 rounded-none shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-slate-900 text-white flex items-center justify-center font-black text-4xl mb-6 rounded-none border-b-8 border-[#328848]">
                  DC
                </div>
                <Badge className="bg-[#328848] text-white mb-4 font-black px-4 py-1 rounded-none">TREINAMENTO & DESENVOLVIMENTO</Badge>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Dale Carnegie</h3>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <p className="text-[#328848] font-black text-xs uppercase tracking-widest mb-2">DESAFIO</p>
                  <p className="text-slate-600 font-medium">Pitch sem padrão, funil desorganizado, taxa de conversão baixa.</p>
                </div>
                <div>
                  <p className="text-[#328848] font-black text-xs uppercase tracking-widest mb-2">AÇÃO</p>
                  <p className="text-slate-800 font-bold leading-relaxed">
                    Padronizamos o pitch comercial e reestruturamos o funil de vendas com o Empilhamento de Funil. O resultado foi +47% na taxa de conversão em menos de 90 dias - sem contratar nenhum vendedor novo.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-200">
                  <div>
                    <p className="text-4xl font-black text-[#328848]">+47%</p>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">de Conversão</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-slate-900">90 dias</p>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Em apenas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => handleCTA()}
              className="bg-[#328848] hover:bg-[#214D2A] text-white font-black text-lg h-16 px-12 rounded-none uppercase tracking-widest transition-all"
            >
              QUERO RESULTADOS COMO ESTE
            </Button>
          </div>
        </div>
      </section>

      {/* 6. AUTORIDADE / FUNDADORES */}
      <section className="py-24 bg-[#0d0d0d] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Quem está por trás da Valeur?</h2>
            <h3 className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto font-bold">
              Felipe Assis & Luan Taube - Fundadores da Valeur Consultoria e da Faculdade do Vendedor
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {[
                { icon: <Rocket className="w-5 h-5" />, text: "+200 máquinas de vendas implementadas" },
                { icon: <LayoutDashboard className="w-5 h-5" />, text: "Especialistas em arquitetura de receita pela Winning by Design" },
                { icon: <Users className="w-5 h-5" />, text: "+1.000 vendedores treinados" },
                { icon: <TrendingUp className="w-5 h-5" />, text: "Especialistas em Growth Sales formados pela G4 Educação" },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: "Especializados no Método Receita Previsível" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "+8 anos trabalhando diretamente com Inside Sales" },
                { icon: <Award className="w-5 h-5" />, text: "Formados pelo Sistema Linha Reta (Jordan Belfort — o Verdadeiro Lobo de Wall Street)" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-300">
                  <div className="text-[#328848]">{item.icon}</div>
                  <span className="font-bold">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-neutral-900 border-b-8 border-[#328848] overflow-hidden relative group">
                <img 
                  src={felipeImg} 
                  alt="Felipe Assis" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] bg-neutral-900 border-b-8 border-[#328848] overflow-hidden relative group">
                <img 
                  src={luanImg} 
                  alt="Luan Taube" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => handleCTA()}
              className="bg-[#328848] hover:bg-[#214D2A] text-white font-black text-lg h-16 px-12 rounded-none uppercase tracking-widest transition-all"
            >
              QUERO APRENDER COM ELES
            </Button>
          </div>
        </div>
      </section>

      {/* 7. O QUE VOCÊ DESCOBRE NO DIAGNÓSTICO */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter">
            <span className="text-[#328848]">No Diagnóstico 360º você descobre:</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Zap className="w-12 h-12" />, title: "Onde estão os gargalos do seu funil" },
              { icon: <UserCheck className="w-12 h-12" />, title: "Por que seu time depende de você para fechar" },
              { icon: <Settings className="w-12 h-12" />, title: "O passo a passo para estruturar a operação" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-12 text-center border-2 border-slate-100 hover:border-[#328848]/30 transition-all group">
                <div className="text-[#328848] mb-8 flex justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black leading-tight uppercase tracking-tighter">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => handleCTA()}
              className="bg-[#328848] hover:bg-[#214D2A] text-white font-black text-lg h-16 px-12 rounded-none uppercase tracking-widest transition-all"
            >
              AGENDAR MEU DIAGNÓSTICO
            </Button>
          </div>
        </div>
      </section>

      {/* 8. PARA QUEM É */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter">
            Este diagnóstico é para você se:
          </h2>

          <div className="space-y-6 mb-16">
            {[
              "Sua empresa é B2B e tem entre 10 a 50 funcionários",
              "Você quer escalar vendas sem depender 100% do fundador",
              "Seu time comercial existe mas não é previsível",
              "Você quer implementar processos reais, não teoria",
              "Você busca método validado, não improviso"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 bg-white/5 p-6 border-l-4 border-[#328848]">
                <Check className="text-[#328848] w-8 h-8 flex-shrink-0" />
                <p className="text-xl font-bold text-slate-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => handleCTA()}
              className="bg-[#328848] hover:bg-[#214D2A] text-white font-black text-lg h-16 px-12 rounded-none uppercase tracking-widest transition-all"
            >
              É O MEU CASO, QUERO AGENDAR
            </Button>
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL COM FORMULÁRIO */}
      <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-20 leading-tight">
            <span className="text-[#328848]">Dar o próximo passo leva</span> menos de um minuto
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#328848] flex items-center justify-center text-white">1</div>
                  Preencha o formulário
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Envie suas informações ao lado. Todos os seus dados estarão 100% seguros conosco.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#328848] flex items-center justify-center text-white">2</div>
                  Receba uma ligação
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Um dos nossos especialistas em empilhamento de funil fará contato para agendar a reunião mais importante do ano com você.
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-10 border border-white/10 shadow-2xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nome completo</label>
                  <Input 
                    required
                    placeholder="Seu nome" 
                    className="bg-black border-white/10 rounded-none h-12 text-white focus:border-[#328848] transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email profissional</label>
                  <Input 
                    required
                    type="email"
                    placeholder="seu@email.com" 
                    className="bg-black border-white/10 rounded-none h-12 text-white focus:border-[#328848] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Telefone/WhatsApp</label>
                  <Input 
                    required
                    placeholder="(00) 00000-0000" 
                    className="bg-black border-white/10 rounded-none h-12 text-white focus:border-[#328848] transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nome da empresa</label>
                  <Input 
                    required
                    placeholder="Sua empresa" 
                    className="bg-black border-white/10 rounded-none h-12 text-white focus:border-[#328848] transition-colors"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Quantos funcionários na equipe de vendas?</label>
                  <select 
                    required
                    className="w-full bg-black border border-white/10 h-12 px-3 text-sm text-white focus:border-[#328848] outline-none transition-colors"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="1-2">1 a 2</option>
                    <option value="3-5">3 a 5</option>
                    <option value="6-10">6 a 10</option>
                    <option value="10+">Mais de 10</option>
                    <option value="none">Não temos time de vendas</option>
                  </select>
                </div>
                <Button 
                  type="submit"
                  disabled={formStatus === 'success'}
                  className={`w-full ${formStatus === 'success' ? 'bg-emerald-600' : 'bg-[#328848] hover:bg-[#214D2A]'} text-white font-black text-lg h-16 rounded-none uppercase tracking-widest transition-all active:scale-95 mt-4 group relative overflow-hidden`}
                >
                  <span className={formStatus === 'success' ? 'opacity-0' : 'opacity-100'}>
                    {formStatus === 'error' ? 'CAMPOS OBRIGATÓRIOS' : 'RECEBER DIAGNÓSTICO GRATUITO'}
                  </span>
                  {formStatus === 'success' && (
                    <motion.div 
                      initial={{ y: 20 }} animate={{ y: 0 }}
                      className="absolute inset-0 flex items-center justify-center gap-2"
                    >
                      <Check className="w-6 h-6" /> REDIRECIONANDO...
                    </motion.div>
                  )}
                </Button>
                {formStatus === 'error' && (
                  <p className="text-center text-[10px] text-rose-500 font-bold uppercase tracking-widest mt-2 animate-pulse">
                    Por favor, preencha todos os campos acima para prosseguir.
                  </p>
                )}
                <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-2">
                  Atendemos empresas B2B com 10 a 50 funcionários.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-[#328848] text-center mb-16 uppercase tracking-tighter">
            Dúvidas frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: "É realmente gratuito?", 
                a: "✅ Sim. O Diagnóstico 360º é 100% gratuito e sem compromisso." 
              },
              { 
                q: "Serve para qualquer tipo de empresa?", 
                a: "✅ Sim. Atendemos empresas B2B de Serviço, Varejo, Indústria, E-commerce, SAAS, Educação, Imobiliária, Franchising e outros segmentos. Ideal para empresas com 10 a 50 funcionários que faturam acima de R$ 1,2M/ano." 
              },
              { 
                q: "Como funciona o diagnóstico?", 
                a: "✅ Análise completa do seu comercial atual + identificação de gargalos nos 20 pilares + plano de ação personalizado. Duração: 60 minutos via Zoom com um especialista Valeur." 
              },
              { 
                q: "O que é o Método Empilhamento de Funil?", 
                a: "✅ Metodologia proprietária com 20 pilares que estruturam toda operação comercial B2B: estratégia, aquisição, vendas e pessoas. Já aplicado em +200 empresas gerando +R$500M em receita adicional." 
              },
              { 
                q: "Quanto tempo para ver resultados?", 
                a: "✅ Clientes implementam melhorias em 60-120 dias com suporte Valeur. Case real: Dale Carnegie teve +47% conversão em 90 dias sem contratar vendedor novo." 
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 border-slate-100 rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left font-black text-[#328848] hover:no-underline py-6 text-lg md:text-xl">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-8 leading-relaxed text-base md:text-lg">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="py-16 bg-[#0a0a0a] text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Valeur Consultoria" className="h-10 w-auto object-contain opacity-50" />
          </div>
          
          <p className="text-slate-500 font-bold text-xs mb-8 uppercase tracking-widest">Atendemos empresas B2B com 10 a 50 funcionários</p>

          <div className="flex justify-center gap-6 mb-10">
            {[
              { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/valeurconsultoria?igsh=Y2dmdjJzbHcwanox", label: "Instagram" },
              { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@valeur-consultoria?si=5Cc-iFijjUcRYOVU", label: "Youtube" },
              { icon: <Music2 className="w-5 h-5" />, href: "https://open.spotify.com/show/7K1iZR9uwosYyxq5GWpJ4e?si=DNKkZhrgT5mlzGl73RL97w", label: "Spotify" },
              { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=61579233116883&locale=pt_BR", label: "Facebook" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#328848] hover:border-[#328848] transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="flex justify-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-widest mb-8">
            <a href="#" className="hover:text-[#328848] transition-colors">Termos de Uso</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-[#328848] transition-colors">Política de Privacidade</a>
          </div>
          
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
            © 2026 Valeur Consultoria | Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
