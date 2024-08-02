import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import okanLogo from '../imgs/okan-logo.jpg';
import nisLogo from '../imgs/ni-uni-logo.png';
import gelLogo from '../imgs/gelisim-universitesi-logo89.png';
import biruniLogo from '../imgs/biruniunilogo.jpg';
import istinyeLogo from '../imgs/istinye-logo.png';
import isikLogo from '../imgs/Isik_Universitesi-logo.png';
import medLogo from '../imgs/istmedipollogo.png';
import altinbasLogo from '../imgs/altinbaslogo.webp';
import fenerLogo from '../imgs/fenerbahceunilogo.png';
import bahLogo from '../imgs/bau-uni-logo.png';
import beykentLogo from '../imgs/beykentlogo.png';
import kentLogo from '../imgs/kentlogo.png';
import atlasLogo from '../imgs/atlas.png';
import beykozLogo from '../imgs/beykoz.png';
import { useTranslation } from 'react-i18next';

const cards = [
  {
    url: nisLogo,
    title: "Nisantasi Universitesi",
    id: 1,
    link: "/nisantasi-universitesi"
  },
  {
    url: okanLogo,
    title: "Okan Universitesi",
    id: 2,
    link: "/okan-universitesi"
  },
  {
    url: gelLogo,
    title: "Gelisim Universitesi",
    id: 3,
    link: "/gelisim-universitesi"
  },
  {
    url: biruniLogo,
    title: "Biruni Universitesi",
    id: 4,
    link: "/biruni-universitesi"
  },
  {
    url: istinyeLogo,
    title: "Istinye Universitesi",
    id: 5,
    link: "/istinye-universitesi"
  },
  {
    url: isikLogo,
    title: "Isik Universitesi",
    id: 6,
    link: "/isik-universitesi"
  },
  {
    url: medLogo,
    title: "Medipol Universitesi",
    id: 7,
    link: "/medipol-universitesi"
  },
  {
    url: altinbasLogo,
    title: "Altinbas Universitesi",
    id: 8,
    link: "/altinbas-universitesi"
  },
  {
    url: fenerLogo,
    title: "Fenerbahce Universitesi",
    id: 9,
    link: "/fenerbahce-universitesi"
  },
  {
    url: bahLogo,
    title: "Bahcesehir Universitesi",
    id: 10,
    link: "/bahcesehir-universitesi"
  },
  {
    url: beykentLogo,
    title: "Beykent Universitesi",
    id: 11,
    link: "/beykent-universitesi"
  },
  {
    url: kentLogo,
    title: "Kent Universitesi",
    id: 12,
    link: "/kent-universitesi"
  },
  {
    url: atlasLogo,
    title: "Atlas Universitesi",
    id: 13,
    link: "/atlas-universitesi"
  },
  {
    url: beykozLogo,
    title: "Beykoz Universitesi",
    id: 14,
    link: "/beykoz-universitesi"
  },
];

const UnisDisplay = () => {
  return (
    <div>
      <div className="flex h-48 items-center justify-center"></div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center"></div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], isArabic ? ["95%", "0%"] : ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[2000vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-white rounded-lg"
    >
      <Link to={card.link} className="block h-full w-full">
        <img
          src={card.url}
          alt={card.title}
          className="absolute inset-0 h-full p-4 w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default UnisDisplay;
