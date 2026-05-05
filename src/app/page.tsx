"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { BookOpen } from "lucide-react";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <motion.div
          className="fixed top-20 right-10 z-50 w-24 h-24 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-2xl pointer-events-none"
          style={{ y, rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
        >
           <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cp1czjlahJ56ROTNQVl0C7XRex/uploaded-1777757622928-5asq5m6z.png" alt="COC" className="w-16 h-16 object-contain" />
        </motion.div>
        <div ref={containerRef}>
          <div id="nav" data-section="nav">
            <NavbarLayoutFloatingInline
              navItems={[
                { name: "A Escola", id: "#about" },
                { name: "Ensino", id: "#ensino" },
                { name: "Matrícula", id: "#matricula" },
                { name: "Contato", id: "#contato" },
              ]}
              brandName="Colégio Raios de Sol"
              button={{ text: "Matricule-se 2026", href: "#matricula" }}
            />
          </div>

          <div id="hero" data-section="hero">
            <HeroBillboardScroll
              background={{ variant: "sparkles-gradient" }}
              title="Educando a futura geração"
              description="Da Educação Infantil ao Ensino Médio em Mauá – SP, com o sistema de ensino COC."
              buttons={[{ text: "Agende uma visita", href: "#contato" }, { text: "Conheça a escola", href: "#about" }]}
              imageSrc="http://img.b2bpic.net/free-photo/white-facade-blue-sky_53876-75125.jpg"
              imageAlt="school facade modern architecture"
            />
          </div>

          <div id="about" data-section="about">
            <TextAbout
              useInvertedBackground={true}
              title="Nossa missão é transformar vidas através da educação"
              tag="Sobre Nós"
              tagIcon={BookOpen}
            />
          </div>

          <div id="features" data-section="features">
            <FeatureCardTwentyThree
              animationType="slide-up"
              textboxLayout="split"
              useInvertedBackground={false}
              features={[
                { id: "1", title: "Missão", tags: ["Educação"], imageSrc: "http://img.b2bpic.net/free-vector/academic-excellence-illustration_24877-52352.jpg" },
                { id: "2", title: "Visão", tags: ["Futuro"], imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-set-idea-business-symbols-illustration_53876-58018.jpg" },
                { id: "3", title: "Valores", tags: ["Ética"], imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-doodle-icons_1034-749.jpg" },
              ]}
              title="Pilares do nosso colégio"
              description="Valores que guiam nosso aprendizado."
            />
          </div>

          <div id="ensino" data-section="ensino">
            <ProductCardThree
              animationType="slide-up"
              textboxLayout="default"
              gridVariant="four-items-2x2-equal-grid"
              useInvertedBackground={true}
              products={[
                { id: "1", name: "Educação Infantil", price: "Berçário", imageSrc: "http://img.b2bpic.net/free-photo/dance-class-women_1385-3183.jpg" },
                { id: "2", name: "Fundamental I", price: "1º ao 5º ano", imageSrc: "http://img.b2bpic.net/free-photo/kids-having-fun-jungle-themed-party_23-2149431626.jpg" },
                { id: "3", name: "Fundamental II", price: "6º ao 9º ano", imageSrc: "http://img.b2bpic.net/free-photo/kids-with-colorful-balloons-medium-shot_23-2149199844.jpg" },
                { id: "4", name: "Ensino Médio", price: "Preparatório", imageSrc: "http://img.b2bpic.net/free-photo/young-people-partying-together-high-angle_23-2149739851.jpg" },
              ]}
              title="Níveis de Ensino"
              description="Crescimento contínuo em todas as fases."
            />
          </div>

          <div id="coc-partners" data-section="coc-partners">
            <SocialProofOne
              names={["COC", "ACADESC", "Pearson", "Matemática", "Robótica", "Coding", "Inglês"]}
              title="Parceria COC"
              description="Sistema de ensino líder nacional."
              textboxLayout="default"
              useInvertedBackground={false}
            />
          </div>

          <div id="testimonials" data-section="testimonials">
            <TestimonialCardFifteen
              useInvertedBackground={true}
              testimonial="Seu filho não vencerá na escola a vida toda… mas uma boa escola vai na vida dele para sempre."
              rating={5}
              author="Família Raios de Sol"
              avatars={[{ src: "https://i.pravatar.cc/150?u=1", alt: "Família" }]}
              ratingAnimation="slide-up"
              avatarsAnimation="slide-up"
            />
          </div>

          <div id="news" data-section="news">
            <BlogCardOne
              animationType="slide-up"
              textboxLayout="default"
              useInvertedBackground={false}
              title="Novidades e Eventos"
              description="Fique por dentro da rotina do colégio."
              blogs={[
                { id: "1", category: "Eventos", title: "Feira de Ciências 2026", excerpt: "Alunos brilham em apresentações.", imageSrc: "http://img.b2bpic.net/free-photo/little-children-trick-treating-halloween_53876-40562.jpg", authorName: "Diretoria", authorAvatar: "http://img.b2bpic.net/free-photo/smiling-child-hugging-their-parents_1098-890.jpg", date: "10/01/2026" },
                { id: "2", category: "Destaque", title: "Matrículas Abertas", excerpt: "Venha fazer parte da nossa família.", imageSrc: "http://img.b2bpic.net/free-photo/realistic-scene-with-young-children-with-autism-playing_23-2151241871.jpg", authorName: "Secretaria", authorAvatar: "http://img.b2bpic.net/free-photo/young-girl-adopted-by-couple_23-2149574085.jpg", date: "15/01/2026" },
                { id: "3", category: "Educação", title: "Novo Espaço Maker", excerpt: "Inovação para o aprendizado.", imageSrc: "http://img.b2bpic.net/free-photo/people-with-medical-masks-looking-game_23-2149015513.jpg", authorName: "Coordenação", authorAvatar: "http://img.b2bpic.net/free-photo/young-girl-adopted-by-couple_23-2149574089.jpg", date: "20/01/2026" },
              ]}
            />
          </div>

          <div id="contato" data-section="contato">
            <ContactCTA
              useInvertedBackground={true}
              background={{ variant: "sparkles-gradient" }}
              tag="Matrículas 2026"
              title="Faça parte da família Colégio Raios de Sol"
              description="Vagas remanescentes abertas. Agende uma visita agora mesmo."
              buttons={[{ text: "Iniciar Matrícula", href: "#matricula" }, { text: "Agendar Visita", href: "#contato" }]}
            />
          </div>

          <div id="footer" data-section="footer">
            <FooterBaseCard
              logoText="Colégio Raios de Sol"
              columns={[
                { title: "Institucional", items: [{ label: "A Escola", href: "#about" }, { label: "Ensino", href: "#ensino" }] },
                { title: "Portal", items: [{ label: "ACADESC", href: "#" }, { label: "Secretaria", href: "#" }] },
                { title: "Contato", items: [{ label: "(11) 4576-5291", href: "tel:1145765291" }, { label: "Jardim Mauá", href: "#" }] },
                { title: "Redes", items: [{ label: "Instagram", href: "#" }, { label: "Facebook", href: "#" }] },
              ]}
            />
          </div>
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}