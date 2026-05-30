'use client';

import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import "@/app/menu-section.css";

const menuItems = [
  {
    id: 1,
    name: "Jungle Mixed Grill Platter",
    category: "Grill",
    image: "/jungle_mixed_grill_platter.png",
    description: "A hearty platter featuring a selection of perfectly grilled meats, showcasing the restaurant's grilling expertise.",
    details: [
      "200g Grilled Beef Skewers (local spices)",
      "150g Herb-Marinated Chicken Thighs",
      "100g Grilled Goat Ribs",
      "Grilled vegetables (peppers, onions, zucchini)",
      "Served with Isombe or Akabenz",
    ],
  },
  {
    id: 2,
    name: "Kigali Grilled Tilapia",
    category: "Seafood",
    image: "/kigali_grilled_tilapia.png",
    description: "Fresh, locally sourced tilapia, seasoned and grilled to perfection — a true local favorite.",
    details: [
      "Whole grilled tilapia (400–500g)",
      "Served with Ugali or Matoke",
      "Kachumbari salad (tomato, onion, chili)",
      "Lemon wedges",
    ],
  },
  {
    id: 3,
    name: "Spicy Peri-Peri Chicken",
    category: "Chicken",
    image: "/spicy_peri_peri_grilled_chicken.png",
    description: "Succulent grilled chicken marinated in a fiery peri-peri sauce, offering a kick of flavor.",
    details: [
      "Half grilled chicken (300–350g)",
      "French fries or sweet potato fries",
      "Coleslaw or green salad",
    ],
  },
  {
    id: 4,
    name: "Jungle BBQ Beef Ribs",
    category: "BBQ",
    image: "/jungle_bbq_beef_ribs.png",
    description: "Slow-cooked, tender beef ribs basted in a smoky, tangy BBQ sauce.",
    details: [
      "300g BBQ beef ribs",
      "Corn on the cob",
      "Baked beans or mashed potatoes",
    ],
  },
  {
    id: 5,
    name: "Supreme Meat Lover's Pizza",
    category: "Pizza",
    image: "/supreme_meat_lovers_pizza.png",
    description: "A classic pizza loaded with a variety of savory meats and melted cheese.",
    details: [
      '12-inch pizza',
      "Beef sausage, pepperoni, grilled chicken",
      "Mozzarella, bell peppers, onions",
    ],
  },
  {
    id: 6,
    name: "Rwandan Chicken & Veggie Pizza",
    category: "Pizza",
    image: "/rwandan_chicken_veggie_pizza.png",
    description: "A unique pizza combining international flavors with local ingredients.",
    details: [
      "10-inch pizza",
      "Grilled chicken, spinach, bell peppers",
      "Local cheese blend, tomato sauce",
    ],
  },
  {
    id: 7,
    name: "Grilled Beef Tacos",
    category: "Tacos",
    image: "/grilled_beef_tacos.png",
    description: "Flavorful grilled beef strips in soft tortillas with fresh toppings.",
    details: [
      "3 soft corn or flour tortillas",
      "150g grilled beef strips",
      "Pico de gallo, sour cream, avocado",
    ],
  },
  {
    id: 8,
    name: "Spicy Chicken Tacos",
    category: "Tacos",
    image: "/spicy_chicken_tacos.png",
    description: "Zesty grilled chicken tacos with a hint of spice, perfect for a quick meal.",
    details: [
      "3 soft corn or flour tortillas",
      "150g spicy grilled chicken",
      "Cabbage slaw, cilantro, lime crema",
    ],
  },
  {
    id: 9,
    name: "Halloumi Skewers",
    category: "Vegetarian",
    image: "/vegetarian_grilled_halloumi_skewers.png",
    description: "Grilled halloumi cheese and colorful vegetables — delicious for non-meat eaters.",
    details: [
      "2 skewers — 150g halloumi & veggies",
      "Quinoa salad or couscous",
      "Mint yogurt dipping sauce",
    ],
  },
  {
    id: 10,
    name: "Jungle Burger",
    category: "Burger",
    image: "/jungle_burger.png",
    description: "A classic burger with a grilled patty, fresh toppings, and our special Jungle sauce.",
    details: [
      "150g grilled beef or chicken patty",
      "Brioche bun with lettuce, tomato, pickles",
      "Jungle special sauce",
      "Side of French fries",
    ],
  },
];

function MenuCard({ item, animDelay }) {
  return (
    <AnimatedSection
      className="menu-card"
      animationType="fade-in-up"
      delay={animDelay}
    >
      {/* Icon badge */}
      <div className="menu-card__number">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      </div>

      {/* Category tag */}
      <div className="menu-card__category">{item.category}</div>

      {/* Image */}
      <div className="menu-card__image-wrap">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="menu-card__image"
          quality={90}
        />
      </div>

      {/* Overlay with details */}
      <div className="menu-card__overlay">
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__desc">{item.description}</p>
        <div className="menu-card__divider" />
        <div className="menu-card__details">
          {item.details.map((detail, i) => (
            <div key={i} className="menu-card__detail-item">
              {detail}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function BestSellersMenu() {
  return (
    <section className="menu-section" id="best-sellers">
      {/* Decorative bg blobs */}
      <div className="menu-section__bg-decor menu-section__bg-decor--left" />
      <div className="menu-section__bg-decor menu-section__bg-decor--right" />

      {/* Header */}
      <div className="menu-header">
        <AnimatedSection animationType="fade-in-down">
          <div className="menu-header__label">
            Best Sellers
          </div>
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up" delay={0.1}>
          <h2 className="menu-header__title">
            Our <span>Signature Plates</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up" delay={0.2}>
          <p className="menu-header__subtitle">
            The most popular picks from our grill — crafted with passion, served with pride
          </p>
        </AnimatedSection>
      </div>

      {/* Menu grid */}
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuCard
            key={item.id}
            item={item}
            index={index}
            animDelay={0.05 * index}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="menu-section__cta">
        <AnimatedSection animationType="fade-in-up">
          <button className="menu-section__cta-btn">
            See Full Menu <span>→</span>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
