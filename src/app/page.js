'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Users, Shield, Zap, Star, Check, ArrowRight, Menu, X, MapPin, MessageCircle, Sparkles, CreditCard, User, Mail, Phone, Calendar, Gift, Crown, Flame, TrendingUp, Award, Rocket, Diamond, Flame as Fire, CloudLightning as Lightning, Target, Lock, Unlock } from 'lucide-react';

const BubbluidateWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  });
  const [showShop, setShowShop] = useState(false);
  const [selectedShopItem, setSelectedShopItem] = useState(null);
  const [showShopCheckout, setShowShopCheckout] = useState(false);
  const [shopCheckoutStep, setShopCheckoutStep] = useState(1);
  const [shopFormData, setShopFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [showPulse, setShowPulse] = useState(false);

  // Анімація при завантаженні
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Функція для прокрутки до секції
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Функція для закриття меню та прокрутки до секції
  const handleMenuClick = (sectionId) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  // Функції для процесу покупки
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (checkoutStep < 3) {
      setCheckoutStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (checkoutStep > 1) {
      setCheckoutStep(prev => prev - 1);
    }
  };

  const handlePurchase = async () => {
    setIsLoading(true);
    // Симуляція процесу оплати
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setCheckoutStep(4); // Показуємо успішне завершення
  };

  // Функції для процесу покупки функцій з магазину
  const handleShopInputChange = (e) => {
    const { name, value } = e.target;
    setShopFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextShopStep = () => {
    if (shopCheckoutStep < 3) {
      setShopCheckoutStep(prev => prev + 1);
    }
  };

  const prevShopStep = () => {
    if (shopCheckoutStep > 1) {
      setShopCheckoutStep(prev => prev - 1);
    }
  };

  const handleShopPurchase = async () => {
    setIsLoading(true);
    // Симуляція процесу оплати
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShopCheckoutStep(4); // Показуємо успішне завершення
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Розширений пошук",
      description: "Знаходь партнера за віком, інтересами, освітою та іншими критеріями"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Безлімітні лайки",
      description: "Вподобай стільки профілів, скільки захочеш"
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Великий Лайк",
      description: "Покажи особливу зацікавленість та виділись серед інших"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Миттєві сповіщення",
      description: "Дізнайся відразу, хто тебе вподобав"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "DateRadar",
      description: "Знаходь анкети в будь-яких обраних містах і країнах"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Перший крок",
      description: "Пиши партнеру першим ще до створення match'у"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Безпека",
      description: "Безлімітний BlackList та контроль приватності"
    }
  ];

  const pricingPlans = [
    {
      id: 'premium',
      name: 'Premium підписка',
      price: '$10.00',
      period: '1 місяць',
      popular: true,
      features: [
        'Всі Premium функції',
        'Безлімітні лайки та перемотки',
        'Розширений пошук',
        'Щоденні топ-пропозиції',
        'Великі лайки (3 на тиждень)',
        'Буст профілю (1 година на тиждень)',
        'Перший крок (2 рази на тиждень)',
        'DateRadar',
        'VIP-косметика профілю',
        'Без реклами'
      ]
    }
  ];

  const testimonials = [
    {
      name: "Анна К.",
      text: "Познайомилася з чоловіком своєї мечти через Vevyne! Алгоритм дійсно працює.",
      rating: 5,
      location: "Київ"
    },
    {
      name: "Михайло Т.",
      text: "Найкращий сервіс для знайомств в Україні. Безпечно та ефективно!",
      rating: 5,
      location: "Львів"
    },
    {
      name: "Олена С.",
      text: "Premium підписка варта кожної копійки. Знайшла багато цікавих людей!",
      rating: 5,
      location: "Харків"
    },
    {
      name: "Дмитро В.",
      text: "За 2 тижні знайшов свою другу половинку. Рекомендую всім!",
      rating: 5,
      location: "Одеса"
    },
    {
      name: "Катерина М.",
      text: "Дуже зручний інтерфейс та швидкий пошук. Вже 3 місяці разом з коханим!",
      rating: 5,
      location: "Дніпро"
    },
    {
      name: "Андрій П.",
      text: "SuperLike функція просто чудова! Дівчина одразу зрозуміла, що я серйозно налаштований.",
      rating: 5,
      location: "Запоріжжя"
    },
    {
      name: "Марія Л.",
      text: "Безпека на високому рівні. Модератори швидко реагуют на скарги. Дякую за захист!",
      rating: 5,
      location: "Вінниця"
    },
    {
      name: "Олександр К.",
      text: "DateRadar допоміг знайти анкети в моєму місті. Дуже зручно!",
      rating: 5,
      location: "Тернопіль"
    },
    {
      name: "Наталія Р.",
      text: "Перший крок - це геніально! Можна написати повідомлення ще до match'у.",
      rating: 5,
      location: "Івано-Франківськ"
    }
  ];

  const faqs = [
    {
      question: "Як створити анкету?",
      answer: "Натисніть 'Створити анкету' в головному меню та слідуйте інструкціям. Додайте фото, заповніть інформацію про себе та налаштуйте фільтри пошуку."
    },
    {
      question: "Що таке Великий лайк?",
      answer: "Великий лайк - це спеціальний лайк, який показує вашу особливу зацікавленість. Людина одразу побачить, що ви їй сподобались."
    },
    {
      question: "Як працює 'Перший крок'?",
      answer: "Це можливість надіслати повідомлення разом з лайком. Ви можете написати текст, надіслати фото або відеоповідомлення."
    },
    {
      question: "Чи безпечний сервіс?",
      answer: "Так! Ми маємо систему верифікації профілів, модерацію контенту та можливість скаржитися на порушення."
    },
    {
      question: "Як працює DateRadar?",
      answer: "DateRadar дозволяє знаходити анкети в будь-яких містах та країнах. Просто вкажіть бажану локацію в налаштуваннях пошуку."
    },
    {
      question: "Скільки коштує Premium підписка?",
      answer: "Premium підписка коштує $15 на місяць. Вона включає всі преміум функції: безлімітні лайки, розширений пошук, DateRadar та багато іншого."
    },
    {
      question: "Можна купити окремі функції?",
      answer: "Так! Ви можете купити окремі лайки, SuperLike, повідомлення або інші функції в нашому магазині без підписки."
    },
    {
      question: "Як відмінити підписку?",
      answer: "Ви можете відмінити підписку в будь-який час в налаштуваннях профілю. Підписка залишиться активна до кінця поточного періоду."
    },
    {
      question: "Чи можна використовувати безкоштовно?",
      answer: "Так! Базовий функціонал доступний безкоштовно. Ви можете створювати анкету, переглядати профілі та ставити обмежену кількість лайків."
    },
    {
      question: "Як зв'язатися з підтримкою?",
      answer: "Ви можете написати нам в Telegram боті @VevyneDatingBot. Ми відповідаємо протягом 24 годин."
    },
    {
      question: "Чи працює сервіс в усіх країнах?",
      answer: "Наразі сервіс працює в Україні та країнах ЄС. Ми плануємо розширити географію в найближчі місяці."
    },
    {
      question: "Як захистити свою приватність?",
      answer: "Ви можете налаштувати рівень приватності в профілі: приховати вік, локацію, або зробити профіль видимим тільки для певних користувачів."
    }
  ];

  const shopItems = [
    {
      id: 'superlikes',
      name: '💙 Великі Лайки',
      icon: <Flame className="w-6 h-6" />,
      description: 'Збільшуй свої шанси на взаємність!',
      packages: [
        { count: '1 Великий лайк', price: '$1', popular: false },
        { count: '15 Великих лайків', price: '$10', popular: true, discount: 'Знижка 33%' },
        { count: '30 Великих лайків', price: '$15', popular: false, discount: 'Знижка 50%' }
      ]
    },
    {
      id: 'boost',
      name: '🚀 Boost профілю',
      icon: <Zap className="w-6 h-6" />,
      description: 'Стань у ТОПі!',
      packages: [
        { count: '1 Boost (1 година)', price: '$2', popular: false },
        { count: '3 Boost\'и (по 1 годині)', price: '$4', popular: true, discount: 'Знижка 33%' },
        { count: '10 Boost\'ів (по 1 годині)', price: '$10', popular: false, discount: 'Знижка 50%' }
      ]
    },
    {
      id: 'messages',
      name: '📨 FirstStep',
      icon: <MessageCircle className="w-6 h-6" />,
      description: 'Напиши першим!',
      packages: [
        { count: '1 повідомлення', price: '$3', popular: false },
        { count: '3 повідомлення', price: '$6', popular: true, discount: 'Знижка 33%' },
        { count: '10 повідомлень', price: '$15', popular: false, discount: 'Знижка 50%' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                <Image 
                  src="/2025-09-16 17.07.34.jpg" 
                  alt="Vevyne Logo" 
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                Vevyne
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Особливості</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Ціни</a>
              <a href="#shop" className="text-gray-700 hover:text-gray-900 transition-colors">Магазин</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">Відгуки</a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">FAQ</a>
              <a 
                href="https://t.me/VevyneDatingBot?start=start" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Перейти до бота</span>
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => handleMenuClick('features')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Особливості</button>
              <button onClick={() => handleMenuClick('pricing')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Ціни</button>
              <button onClick={() => handleMenuClick('shop')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Магазин</button>
              <button onClick={() => handleMenuClick('testimonials')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Відгуки</button>
              <button onClick={() => handleMenuClick('faq')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">FAQ</button>
              <a 
                href="https://t.me/VevyneDatingBot?start=start" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left bg-gray-900 text-white px-3 py-2 rounded-lg flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Перейти до бота</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        {/* Advanced floating elements and particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-100/50 via-pink-100/50 to-purple-100/50"></div>
          
          {/* Large animated gradient orbs */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-300/30 to-rose-300/30 rounded-full blur-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-300/30 to-indigo-300/30 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-rose-200/25 to-pink-200/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-gradient-to-r from-purple-200/25 to-pink-200/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s', animationDuration: '12s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-28 h-28 bg-gradient-to-r from-pink-200/20 to-rose-200/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
          
          {/* Enhanced floating particles */}
          <div className="absolute top-32 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-70" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-80" style={{animationDelay: '3s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-32 left-1/2 w-4 h-4 bg-rose-400 rounded-full animate-ping opacity-60" style={{animationDelay: '5s', animationDuration: '5s'}}></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-90" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-300 rounded-full animate-ping opacity-70" style={{animationDelay: '4s', animationDuration: '4.5s'}}></div>
          <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-rose-300 rounded-full animate-ping opacity-85" style={{animationDelay: '1.5s', animationDuration: '3.8s'}}></div>
          
          {/* Enhanced geometric shapes */}
          <div className="absolute top-16 right-1/4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rotate-45 animate-spin opacity-40" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-40 left-1/5 w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
          <div className="absolute top-1/3 left-1/5 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rotate-12 animate-bounce opacity-45" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
          <div className="absolute bottom-1/4 right-1/5 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rotate-45 animate-spin opacity-35" style={{animationDelay: '4s', animationDuration: '8s'}}></div>
          
          {/* Enhanced animated lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent animate-pulse" style={{animationDelay: '1s', animationDuration: '8s'}}></div>
          <div className="absolute top-1/3 right-0 w-px h-40 bg-gradient-to-b from-transparent via-purple-300/50 to-transparent animate-pulse" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-300/40 to-transparent animate-pulse" style={{animationDelay: '5s', animationDuration: '10s'}}></div>
          <div className="absolute top-2/3 left-0 w-px h-32 bg-gradient-to-b from-transparent via-pink-300/35 to-transparent animate-pulse" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-ping opacity-50" style={{animationDelay: '2.5s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-1/2 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-60" style={{animationDelay: '4.5s', animationDuration: '4s'}}></div>
          <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-ping opacity-55" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Animated Logo Section */}
          <div className={`mb-12 transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '100ms' }}>
            <div className="inline-flex items-center space-x-6 group cursor-pointer">
              <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-3xl group-hover:shadow-4xl transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12">
                {/* Animated border rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-lg animate-pulse" style={{animationDelay: '0.4s'}}></div>
                
                {/* Rotating outer rings */}
                <div className="absolute -inset-3 rounded-full border-2 border-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{animationDuration: '3s'}}></div>
                <div className="absolute -inset-4 rounded-full border border-transparent bg-gradient-to-r from-purple-500 via-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}></div>
                
                {/* Glow effects */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* Image with overlay */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/2025-09-16 17.07.34.jpg" 
                    alt="Vevyne Logo" 
                    width={96}
                    height={96}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating particles around logo */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute top-1/2 -right-3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-rose-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
                
                {/* Additional floating particles */}
                <div className="absolute top-1/4 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.8s'}}></div>
                <div className="absolute bottom-1/4 -right-2 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '1s'}}></div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '1.2s'}}></div>
                <div className="absolute -bottom-3 right-1/2 transform translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '1.4s'}}></div>
                
                {/* Rotating sparkles */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-white rounded-full animate-spin opacity-0 group-hover:opacity-100" style={{animationDuration: '2s'}}></div>
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1 w-2 h-2 bg-yellow-300 rounded-full animate-spin opacity-0 group-hover:opacity-100" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-pink-300 rounded-full animate-spin opacity-0 group-hover:opacity-100" style={{animationDuration: '2.5s', animationDelay: '0.3s'}}></div>
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-1 h-1 bg-purple-300 rounded-full animate-spin opacity-0 group-hover:opacity-100" style={{animationDuration: '4s', animationDelay: '0.7s'}}></div>
                
                {/* Pulsing emojis */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl animate-pulse opacity-0 group-hover:opacity-100" style={{animationDelay: '0.5s'}}>💖</div>
                <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2 text-xl animate-bounce opacity-0 group-hover:opacity-100" style={{animationDelay: '0.8s'}}>✨</div>
              </div>
              
              <div className="text-left">
                <div className="text-4xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors duration-500 relative">
                  <span className="relative z-10">Vevyne</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
                <div className="text-lg text-gray-600 group-hover:text-rose-500 transition-colors duration-300 flex items-center space-x-2">
                  <span>Знайди своє кохання</span>
                  <span className="text-2xl animate-bounce group-hover:animate-pulse">💕</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`inline-flex items-center space-x-2 bg-white rounded-lg px-6 py-2 mb-8 transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Sparkles className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Найкращий сервіс для знайомств в Україні</span>
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent relative inline-block group cursor-pointer">
              <span className="relative z-10 drop-shadow-lg">Vevyne</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-1000"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating sparkles around title */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute top-1/2 -right-6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-rose-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.9s'}}></div>
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-700 font-light relative inline-block group cursor-pointer">
              <span className="relative z-10 drop-shadow-md">Знайди своє кохання</span>
              <span className="absolute -top-3 -right-3 text-3xl animate-bounce group-hover:animate-pulse">💕</span>
              <span className="absolute -bottom-2 -left-2 text-2xl animate-pulse group-hover:animate-bounce" style={{animationDelay: '0.5s'}}>✨</span>
              <span className="absolute top-1/2 -right-4 text-xl animate-ping group-hover:animate-spin" style={{animationDelay: '1s'}}>💖</span>
              <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-lg animate-bounce group-hover:animate-pulse" style={{animationDelay: '1.5s'}}>🌟</span>
            </span>
          </h1>
          
          <p className={`text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <span className="relative inline-block group cursor-pointer">
              <span className="relative z-10">Vevyne - це не просто сервіс для знайомств, це твій найкращий друг у пошуку справжнього кохання.</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </span>
            <br />
            <span className="relative inline-block group cursor-pointer mt-2">
              <span className="relative z-10">З&apos;єднуємо серця та душі людей, які дійсно підходять один одному.</span>
              <span className="absolute -top-1 -right-1 text-2xl animate-bounce group-hover:animate-pulse">✨</span>
              <span className="absolute -bottom-1 -left-1 text-xl animate-pulse group-hover:animate-bounce" style={{animationDelay: '0.5s'}}>💕</span>
            </span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <a 
              href="https://t.me/VevyneDatingBot?start=start" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`relative bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-rose-600 hover:to-pink-600 transition-all flex items-center space-x-4 group shadow-2xl hover:shadow-4xl transform hover:scale-110 hover:-translate-y-2 overflow-hidden ${
                clickedButton === 'hero-bot' ? 'animate-pulse bg-gradient-to-r from-green-500 to-emerald-500' : ''
              }`}
              onClick={() => {
                setClickedButton('hero-bot');
                setTimeout(() => setClickedButton(null), 2000);
              }}
            >
              {/* Enhanced animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/50 to-pink-500/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">Перейти до бота</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              
              {/* Enhanced sparkle effects */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute top-1/2 -right-3 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.4s'}}></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
            </a>
            <button 
              onClick={() => {
                setClickedButton('hero-learn');
                setTimeout(() => setClickedButton(null), 1500);
                scrollToSection('features');
              }}
              className={`relative border-2 border-rose-300 text-rose-600 px-10 py-5 rounded-full text-lg font-bold hover:border-rose-500 hover:text-rose-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all cursor-pointer transform hover:scale-110 hover:-translate-y-2 group overflow-hidden ${
                clickedButton === 'hero-learn' ? 'animate-pulse bg-gradient-to-r from-rose-100 to-pink-100 border-rose-500' : ''
              }`}
            >
              {/* Enhanced animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <span className="flex items-center space-x-4 relative z-10">
                <span>Дізнатися більше</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              
              {/* Enhanced floating particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-rose-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute top-1/2 -right-3 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-rose-300 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.7s'}}></div>
            </button>
          </div>

          {/* Hero Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
            <div 
              className={`relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center border border-pink-100 hover:scale-110 hover:-rotate-2 hover:bg-white/80 group cursor-pointer overflow-hidden ${
                hoveredCard === 'stats-users' ? 'ring-4 ring-pink-200 shadow-3xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard('stats-users')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                setClickedButton('stats-users');
                setTimeout(() => setClickedButton(null), 1500);
              }}
            >
              {/* 3D background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-rose-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.2s'}}></div>
              <div className="text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center space-x-2 group-hover:text-pink-600 transition-colors">
                <TrendingUp className="w-5 h-5 text-pink-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:scale-110 transition-transform duration-300">100K+</span>
                {clickedButton === 'stats-users' && <Sparkles className="w-4 h-4 text-yellow-500 animate-spin" />}
              </div>
              <div className="text-sm text-gray-600 group-hover:text-pink-500 transition-colors">Активних користувачів</div>
            </div>
            <div 
              className={`bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-xl transition-all text-center border border-pink-100 hover:scale-105 hover:rotate-1 hover:bg-white/80 group cursor-pointer ${
                hoveredCard === 'stats-couples' ? 'ring-4 ring-rose-200 shadow-3xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard('stats-couples')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                setClickedButton('stats-couples');
                setTimeout(() => setClickedButton(null), 1500);
              }}
            >
              <div className="text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center space-x-2 group-hover:text-rose-600 transition-colors">
                <Heart className="w-5 h-5 text-rose-500 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                <span className="group-hover:scale-110 transition-transform duration-300">25K+</span>
                {clickedButton === 'stats-couples' && <Sparkles className="w-4 h-4 text-yellow-500 animate-spin" />}
              </div>
              <div className="text-sm text-gray-600 group-hover:text-rose-500 transition-colors">Успішних пар</div>
            </div>
            <div 
              className={`bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-xl transition-all text-center border border-pink-100 hover:scale-105 hover:-rotate-1 hover:bg-white/80 group cursor-pointer ${
                hoveredCard === 'stats-rating' ? 'ring-4 ring-purple-200 shadow-3xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard('stats-rating')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                setClickedButton('stats-rating');
                setTimeout(() => setClickedButton(null), 1500);
              }}
            >
              <div className="text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center space-x-2 group-hover:text-purple-600 transition-colors">
                <Star className="w-5 h-5 text-purple-500 group-hover:scale-110 group-hover:rotate-180 transition-transform duration-500" />
                <span className="group-hover:scale-110 transition-transform duration-300">4.9★</span>
                {clickedButton === 'stats-rating' && <Sparkles className="w-4 h-4 text-yellow-500 animate-spin" />}
              </div>
              <div className="text-sm text-gray-600 group-hover:text-purple-500 transition-colors">Рейтинг користувачів</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-100/30 via-pink-100/30 to-rose-100/30"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-300/15 to-pink-300/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300/15 to-rose-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s', animationDuration: '12s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s', animationDuration: '14s'}}></div>
          
          {/* Enhanced floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rotate-45 animate-spin opacity-30" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce opacity-25" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-rose-400 rotate-12 animate-spin opacity-35" style={{animationDelay: '4s', animationDuration: '15s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-7 h-7 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse opacity-20" style={{animationDelay: '6s', animationDuration: '9s'}}></div>
          
          {/* Additional floating particles */}
          <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-40" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/2 left-1/5 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50" style={{animationDelay: '3s', animationDuration: '3s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-rose-400 rounded-full animate-ping opacity-35" style={{animationDelay: '5s', animationDuration: '5s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent relative inline-block group cursor-pointer">
                <span className="relative z-10 drop-shadow-lg">Чому саме Vevyne?</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
                
                {/* Floating sparkles around title */}
                <div className="absolute -top-3 -right-3 text-3xl animate-bounce group-hover:animate-pulse">✨</div>
                <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse group-hover:animate-bounce" style={{animationDelay: '0.5s'}}>💕</div>
                <div className="absolute top-1/2 -right-4 text-xl animate-ping group-hover:animate-spin" style={{animationDelay: '1s'}}>💖</div>
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span className="relative inline-block group cursor-pointer">
                <span className="relative z-10">Ми створили найрозумніший алгоритм пошуку партнера з максимальною безпекою та зручністю</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <span className="absolute -top-1 -right-1 text-2xl animate-bounce group-hover:animate-pulse">💕</span>
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-4 border border-pink-100 text-center hover:scale-110 hover:rotate-2 group relative overflow-hidden cursor-pointer ${
                  animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  hoveredCard === `feature-${index}` ? 'ring-4 ring-pink-200 shadow-4xl' : ''
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(`feature-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  setClickedButton(`feature-${index}`);
                  setTimeout(() => setClickedButton(null), 1500);
                }}
              >
                {/* Enhanced background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50/40 to-pink-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl flex items-center justify-center text-white mb-8 mx-auto shadow-2xl group-hover:scale-150 group-hover:rotate-12 group-hover:shadow-3xl transition-all duration-700">
                    <div className="group-hover:animate-bounce">
                      {feature.icon}
                    </div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute top-1/2 -right-3 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.4s'}}></div>
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.6s'}}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-rose-600 transition-colors group-hover:scale-110 transform duration-500 relative">
                    <span className="relative z-10">{feature.title}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors relative">
                    <span className="relative z-10">{feature.description}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </p>
                  
                  {/* Additional floating elements */}
                  <div className="absolute -top-4 -right-4 w-2 h-2 bg-rose-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '0.8s'}}></div>
                  <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -right-6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{animationDelay: '1.2s'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-100/40 via-rose-100/40 to-purple-100/40"></div>
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-rose-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s', animationDuration: '14s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-200/15 to-pink-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s', animationDuration: '16s'}}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rotate-45 animate-spin opacity-25" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full animate-bounce opacity-20" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rotate-12 animate-spin opacity-30" style={{animationDelay: '4s', animationDuration: '15s'}}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-40" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/2 left-1/5 w-2 h-2 bg-rose-400 rounded-full animate-ping opacity-50" style={{animationDelay: '3s', animationDuration: '3s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-35" style={{animationDelay: '5s', animationDuration: '5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent relative inline-block group cursor-pointer">
                <span className="relative z-10 drop-shadow-lg">💎 Придбати Premium підписку</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
                
                {/* Floating sparkles around title */}
                <div className="absolute -top-3 -right-3 text-3xl animate-bounce group-hover:animate-pulse">💎</div>
                <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse group-hover:animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
                <div className="absolute top-1/2 -right-4 text-xl animate-ping group-hover:animate-spin" style={{animationDelay: '1s'}}>💖</div>
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span className="relative inline-block group cursor-pointer">
                <span className="relative z-10">💎 Premium підписка включає всі функції, описані на попередній сторінці!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <span className="absolute -top-1 -right-1 text-2xl animate-bounce group-hover:animate-pulse">💎</span>
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-8">
            {/* Тиждень */}
            <div className="relative">
              {/* Популярна помітка - поза карткою */}
              <div className="absolute -top-2 -right-2 z-30">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse flex items-center space-x-1">
                  <Rocket className="w-3 h-3" />
                  <span>СПРОБУЙ</span>
                </div>
              </div>
              
              <div 
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-pink-100 hover:scale-105 hover:rotate-1 hover:bg-white/90 group relative overflow-hidden cursor-pointer ${
                  hoveredCard === 'week' ? 'ring-4 ring-pink-200 shadow-3xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard('week')}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  setClickedButton('week');
                  setTimeout(() => setClickedButton(null), 2000);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-500">
                    <Calendar className="w-6 h-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Тиждень</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">4.99$</div>
                  <p className="text-sm text-gray-500">за тиждень</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-rose-500" />
                  <span className="text-sm text-gray-600">Всі Premium функції</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-rose-500" />
                  <span className="text-sm text-gray-600">Безлімітні лайки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-rose-500" />
                  <span className="text-sm text-gray-600">Розширений пошук</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 text-center mb-4">Ідеально, щоб спробувати всі функції боту по ціні двох кав ☕</p>
              
              <div className="text-center">
                <button 
                  className={`w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-xl font-bold text-sm hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group ${
                    clickedButton === 'week' ? 'animate-pulse bg-gradient-to-r from-green-500 to-emerald-500' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCheckout(true);
                    setSelectedPlan('week');
                  }}
                >
                  {clickedButton === 'week' ? (
                    <>
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>Обрано!</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      <span>Обрати план</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <div className="mt-2 flex items-center justify-center space-x-2 text-rose-500 font-semibold text-xs">
                  <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                  <span>Миттєва активація</span>
                </div>
              </div>
              </div>
            </div>

            {/* Місяць - Популярний */}
            <div className="relative">
              {/* Популярна помітка з анімацією - поза карткою */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1 animate-pulse">
                  <Diamond className="w-4 h-4" />
                  <span>ПОПУЛЯРНИЙ</span>
                  <Sparkles className="w-3 h-3 animate-spin" />
                </div>
              </div>
              
              {/* Додаткова анімація */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-ping z-20">
                <Star className="w-3 h-3 text-white" />
              </div>
              
              <div 
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-rose-300 relative hover:scale-110 hover:rotate-1 group overflow-hidden cursor-pointer ${
                  hoveredCard === 'month' ? 'ring-4 ring-rose-200 shadow-3xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard('month')}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  setClickedButton('month');
                  setTimeout(() => setClickedButton(null), 2000);
                }}
              >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100/30 to-pink-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl transition-all duration-500">
                    <Star className="w-6 h-6 text-white group-hover:animate-spin" style={{animationDuration: '2s'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Місяць</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">10$</div>
                  <div className="text-sm text-green-600 font-semibold">Заощадження 50%</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-rose-500" />
                  <span className="text-sm text-gray-600">Всі Premium функції</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-rose-500" />
                  <span className="text-sm text-gray-600">Безлімітні лайки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-rose-500" />
                  <span className="text-sm text-gray-600">Розширений пошук</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-rose-500" />
                  <span className="text-sm text-gray-600">DateRadar</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 text-center mb-4">Половина ціни — подвійний шанс знайти своє кохання ❣️</p>
              
              <div className="text-center">
                <button 
                  className={`w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white py-3 px-6 rounded-xl font-bold text-sm hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group ${
                    clickedButton === 'month' ? 'animate-pulse bg-gradient-to-r from-green-500 to-emerald-500' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCheckout(true);
                    setSelectedPlan('month');
                  }}
                >
                  {clickedButton === 'month' ? (
                    <>
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>Обрано!</span>
                    </>
                  ) : (
                    <>
                      <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      <span>Обрати план</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <div className="mt-2 flex items-center justify-center space-x-2 text-rose-500 font-semibold text-xs">
                  <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                  <span>Найкращий вибір</span>
                  <Fire className="w-3 h-3 text-orange-500 animate-pulse" />
                </div>
              </div>
              </div>
            </div>

            {/* 6 Місяців */}
            <div className="relative">
              {/* VIP помітка - поза карткою */}
              <div className="absolute -top-2 -right-2 z-30">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse flex items-center space-x-1">
                  <Crown className="w-3 h-3" />
                  <span>VIP</span>
                </div>
              </div>
              
              {/* Додаткова анімація */}
              <div className="absolute -top-1 -left-1 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center animate-ping z-20">
                <Award className="w-3 h-3 text-white" />
              </div>
              
              <div 
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-pink-100 hover:scale-105 hover:-rotate-1 group relative overflow-hidden cursor-pointer ${
                  hoveredCard === '6months' ? 'ring-4 ring-purple-200 shadow-3xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard('6months')}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  setClickedButton('6months');
                  setTimeout(() => setClickedButton(null), 2000);
                }}
              >
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-500">
                    <Crown className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">6 Місяців</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">36$</div>
                  <div className="text-sm text-green-600 font-semibold">Заощадження 70%</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">Всі Premium функції</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">Безлімітні лайки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">Розширений пошук</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">VIP-косметика профілю</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 text-center mb-4">Пів року знайомств за ціною одного побачення 🍷</p>
              
              <div className="text-center">
                <button 
                  className={`w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-bold text-sm hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group ${
                    clickedButton === '6months' ? 'animate-pulse bg-gradient-to-r from-green-500 to-emerald-500' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCheckout(true);
                    setSelectedPlan('6months');
                  }}
                >
                  {clickedButton === '6months' ? (
                    <>
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>Обрано!</span>
                    </>
                  ) : (
                    <>
                      <Crown className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      <span>Обрати план</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <div className="mt-2 flex items-center justify-center space-x-2 text-purple-500 font-semibold text-xs">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Найкраща ціна</span>
                  <Lightning className="w-3 h-3 text-yellow-500 animate-pulse" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Магазин функцій
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Купи окремі функції без підписки. Ідеально для тих, хто хоче спробувати преміум можливості
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {shopItems.map((item, index) => (
              <div 
                key={item.id}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100 ${
                  animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  {item.id === 'superlikes' && (
                    <p className="text-gray-500 text-xs mb-2">Хочеш, щоб твій профіль людина, якій ти поставив лайк, помітила швидше?<br/>Великий лайк завжди піднімає тебе вгору і показує твою зацікавленість з першого погляду.</p>
                  )}
                  {item.id === 'boost' && (
                    <p className="text-gray-500 text-xs mb-2">Хочеш, щоб тебе помічали першим?<br/>Boost піднімає твій профіль у пошуку та збільшує перегляди до 10 разів!</p>
                  )}
                  {item.id === 'messages' && (
                    <p className="text-gray-500 text-xs mb-2">Не чекай на збіг, візьми ініціативу у свої руки!<br/>FirstStep дає можливість написати цікавій людині ще до match&apos;у 🫶</p>
                  )}
                </div>
                
                <div className="space-y-3 mb-6">
                  {item.packages.map((pkg, pkgIndex) => (
                    <div 
                      key={pkgIndex}
                      className={`border rounded-xl p-3 cursor-pointer transition-all hover:border-pink-300 ${
                        pkg.popular ? 'border-pink-500 bg-pink-50' : 'border-gray-200'
                      }`}
                      onClick={() => {
                        setSelectedShopItem({ ...item, selectedPackage: pkg });
                        setShowShop(true);
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">{pkg.count}</span>
                        <span className="text-lg font-bold text-pink-600">{pkg.price}</span>
                      </div>
                      {pkg.discount && (
                        <div className="text-xs text-green-600 font-medium mt-1">{pkg.discount}</div>
                      )}
                      {pkg.popular && !pkg.discount && (
                        <div className="text-xs text-pink-600 font-medium mt-1">Популярний</div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 text-rose-500 font-semibold">
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                    <span>Доступно в боті</span>
                  </div>
                </div>
                {item.id === 'superlikes' && (
                  <p className="text-center text-gray-500 text-xs mt-3">💙 Будь тим, кого неможливо проігнорувати!</p>
                )}
                {item.id === 'boost' && (
                  <p className="text-center text-gray-500 text-xs mt-3">🚀 Ідеально для швидких знайомств та максимального ефекту!</p>
                )}
                {item.id === 'messages' && (
                  <p className="text-center text-gray-500 text-xs mt-3">📨 Зроби перший крок — і отримаєш шанс на знайомство, яке інші втратять!</p>
                )}
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                Що кажуть користувачі 💕
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-pink-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                Часті запитання ❓
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-pink-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-pink-50/50 transition-all duration-300 flex items-center justify-between group"
                >
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-rose-600 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${
                  openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-pulse" style={{animationDuration: '5s', animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
            Готовий знайти справжнє кохання? 💕
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Приєднуйся до тисяч щасливих пар, які знайшли одне одного через Vevyne!
          </p>
          <a 
            href="https://t.me/VevyneDatingBot?start=start" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all transform hover:scale-110 hover:rotate-2 shadow-lg hover:shadow-2xl group relative overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-pink-700 transition-colors">
              Почати зараз - це безкоштовно! 🚀
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-pink-100 to-rose-100 text-gray-800 py-12 px-4 border-t border-pink-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-md">
                  <Image 
                    src="/2025-09-16 17.07.34.jpg" 
                    alt="Vevyne Logo" 
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-gray-800">Vevyne</span>
              </div>
              <p className="text-gray-600 text-sm">
                Найкращий сервіс для знайомств в Україні. З&apos;єднуємо серця! 💕
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-gray-800">Продукт</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-rose-600 transition-colors">Особливості</a></li>
                <li><a href="#pricing" className="hover:text-rose-600 transition-colors">Ціни</a></li>
                <li><a href="#shop" className="hover:text-rose-600 transition-colors">Магазин</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-gray-800">Підтримка</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#faq" className="hover:text-rose-600 transition-colors">FAQ</a></li>
                <li><a href="#testimonials" className="hover:text-rose-600 transition-colors">Відгуки</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-gray-800">Правова інформація</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/terms-of-policy" className="hover:text-rose-600 transition-colors">Політика приватності</a></li>
                <li><a href="/terms-of-service" className="hover:text-rose-600 transition-colors">Умови використання</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-pink-200 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Vevyne. Всі права захищені. 💕</p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl transform animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 text-white p-8 rounded-t-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Оформлення замовлення</h2>
                    <p className="text-pink-100 text-lg">Швидко, безпечно та зручно</p>
                  </div>
                  <button 
                    onClick={() => {
                      setShowCheckout(false);
                      setCheckoutStep(1);
                      setFormData({
                        name: '', email: '', phone: '', cardNumber: '', 
                        expiryDate: '', cvv: '', billingAddress: ''
                      });
                    }}
                    className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Progress Steps */}
                <div className="flex items-center justify-center space-x-8">
                  {[
                    { step: 1, title: 'План', icon: <Crown className="w-5 h-5" /> },
                    { step: 2, title: 'Дані', icon: <User className="w-5 h-5" /> },
                    { step: 3, title: 'Оплата', icon: <CreditCard className="w-5 h-5" /> },
                    { step: 4, title: 'Готово', icon: <Check className="w-5 h-5" /> }
                  ].map((item, index) => (
                    <div key={item.step} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        item.step <= checkoutStep 
                          ? 'bg-white text-pink-600 shadow-lg scale-110' 
                          : 'bg-white/30 text-white'
                      }`}>
                        {item.step < checkoutStep ? <Check className="w-5 h-5" /> : item.icon}
                      </div>
                      <span className="text-sm mt-2 text-pink-100">{item.title}</span>
                      {index < 3 && (
                        <div className={`absolute w-16 h-1 mt-6 ml-12 ${
                          item.step < checkoutStep ? 'bg-white' : 'bg-white/30'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div className="p-8">
              {checkoutStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                      <Crown className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Premium підписка</h3>
                    <p className="text-xl text-gray-600">Отримайте доступ до всіх преміум функцій</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-8 border border-pink-200">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800">Premium підписка</h4>
                        <p className="text-gray-600">1 місяць повного доступу</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-pink-600">$15.00</div>
                        <div className="text-sm text-gray-500">за місяць</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pricingPlans[0].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setShowCheckout(false)}
                      className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition-all transform hover:scale-105"
                    >
                      Скасувати
                    </button>
                    <button 
                      onClick={nextStep}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    >
                      <span>Продовжити</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      <User className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Контактна інформація</h3>
                    <p className="text-xl text-gray-600">Потрібно для активації підписки</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <User className="w-5 h-5 mr-2 text-pink-500" />
                        Ім&apos;я та прізвище
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="Введіть ваше ім'я"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-pink-500" />
                        Email адреса
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-pink-500" />
                        Номер телефону
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="+380 (XX) XXX XX XX"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Захист даних</h4>
                        <p className="text-blue-700 text-sm">Ваша інформація захищена та використовується тільки для активації підписки. Ми ніколи не передаємо дані третім особам.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition-all transform hover:scale-105"
                    >
                      Назад
                    </button>
                    <button 
                      onClick={nextStep}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    >
                      <span>Продовжити</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      <CreditCard className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Платіжна інформація</h3>
                    <p className="text-xl text-gray-600">Безпечна оплата карткою</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-pink-500" />
                        Номер картки
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Термін дії
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          CVV код
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                          placeholder="123"
                          maxLength="3"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Адреса для рахунку (опціонально)
                      </label>
                      <textarea
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="Введіть адресу для виставлення рахунку"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 mb-2">Безпечна оплата</h4>
                        <p className="text-green-700 text-sm mb-2">Ваші дані захищені 256-бітним SSL шифруванням</p>
                        <div className="flex items-center space-x-4 text-xs text-green-600">
                          <span>🔒 SSL захист</span>
                          <span>💳 PCI DSS</span>
                          <span>🛡️ 3D Secure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={prevStep}
                      className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition-all transform hover:scale-105"
                    >
                      Назад
                    </button>
                    <button 
                      onClick={handlePurchase}
                      disabled={isLoading}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Обробка оплати...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          <span>Оплатити $15.00</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep === 4 && (
                <div className="text-center space-y-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Check className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Оплата успішна! 🎉</h3>
                    <p className="text-xl text-gray-600 mb-2">Ваша Premium підписка активована</p>
                    <p className="text-gray-500">Деталі надіслані на вашу email адресу</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-8 border border-pink-200">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-gray-800">Вітаємо з Premium!</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Безлімітні лайки</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">DateRadar</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Перший крок</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Розширений пошук</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm">
                      Тепер ви маєте доступ до всіх преміум функцій. Перевірте email для підтвердження та інструкцій.
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://t.me/VevyneDatingBot?start=start" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Перейти до бота</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <button 
                      onClick={() => {
                        setShowCheckout(false);
                        setCheckoutStep(1);
                        setFormData({
                          name: '', email: '', phone: '', cardNumber: '', 
                          expiryDate: '', cvv: '', billingAddress: ''
                        });
                      }}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Готово
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Shop Modal */}
      {showShop && selectedShopItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl transform animate-in zoom-in-95 duration-300">
            {/* Header with animated background */}
            <div className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 text-white p-8 rounded-t-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Купити {selectedShopItem.name}</h2>
                    <p className="text-pink-100 text-lg">{selectedShopItem.description}</p>
                  </div>
                  <button 
                    onClick={() => setShowShop(false)}
                    className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white transform hover:scale-110 transition-transform duration-300">
                    {selectedShopItem.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold mb-1">{selectedShopItem.selectedPackage.price}</div>
                    <div className="text-pink-100 text-lg">{selectedShopItem.selectedPackage.count}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Що ви отримаєте:</h3>
                <div className="space-y-3">
                  {selectedShopItem.id === 'likes' && (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Миттєве поповнення лайків</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Без обмежень на використання</span>
                      </div>
                    </>
                  )}
                  {selectedShopItem.id === 'superlikes' && (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Покажіть особливу зацікавленість</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Збільшує шанси на відповідь</span>
                      </div>
                    </>
                  )}
                  {selectedShopItem.id === 'messages' && (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Напишіть першим до match&apos;у</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Додайте фото або відео</span>
                      </div>
                    </>
                  )}
                  {selectedShopItem.id === 'boost' && (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Ваш профіль буде показано першим</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Дійсний 30 хвилин</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4">
                <button 
                  onClick={() => {
                    setShowShop(false);
                    setShowShopCheckout(true);
                    setShopCheckoutStep(1);
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Оплатити карткою</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a 
                  href="https://t.me/VevyneDatingBot?start=start" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Купити в Telegram</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Security badge */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>Безпечна оплата • SSL захист</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shop Checkout Modal */}
      {showShopCheckout && selectedShopItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl transform animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 text-white p-8 rounded-t-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Покупка {selectedShopItem.name}</h2>
                    <p className="text-pink-100 text-lg">Швидко, безпечно та зручно</p>
                  </div>
                  <button 
                    onClick={() => {
                      setShowShopCheckout(false);
                      setShopCheckoutStep(1);
                      setShopFormData({
                        name: '', email: '', phone: '', cardNumber: '', 
                        expiryDate: '', cvv: ''
                      });
                    }}
                    className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Progress Steps */}
                <div className="flex items-center justify-center space-x-8">
                  {[
                    { step: 1, title: 'Товар', icon: selectedShopItem.icon },
                    { step: 2, title: 'Дані', icon: <User className="w-5 h-5" /> },
                    { step: 3, title: 'Оплата', icon: <CreditCard className="w-5 h-5" /> },
                    { step: 4, title: 'Готово', icon: <Check className="w-5 h-5" /> }
                  ].map((item, index) => (
                    <div key={item.step} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        item.step <= shopCheckoutStep 
                          ? 'bg-white text-pink-600 shadow-lg scale-110' 
                          : 'bg-white/30 text-white'
                      }`}>
                        {item.step < shopCheckoutStep ? <Check className="w-5 h-5" /> : item.icon}
                      </div>
                      <span className="text-sm mt-2 text-pink-100">{item.title}</span>
                      {index < 3 && (
                        <div className={`absolute w-16 h-1 mt-6 ml-12 ${
                          item.step < shopCheckoutStep ? 'bg-white' : 'bg-white/30'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div className="p-8">
              {shopCheckoutStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                      {selectedShopItem.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">{selectedShopItem.name}</h3>
                    <p className="text-xl text-gray-600">{selectedShopItem.description}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-8 border border-pink-200">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800">{selectedShopItem.selectedPackage.count}</h4>
                        <p className="text-gray-600">Миттєва активація</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-pink-600">{selectedShopItem.selectedPackage.price}</div>
                        <div className="text-sm text-gray-500">одноразова оплата</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {selectedShopItem.id === 'likes' && (
                        <>
                          <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Миттєве поповнення лайків</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Без обмежень на використання</span>
                          </div>
                        </>
                      )}
                      {selectedShopItem.id === 'superlikes' && (
                        <>
                          <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Покажіть особливу зацікавленість</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Збільшує шанси на відповідь</span>
                          </div>
                        </>
                      )}
                      {selectedShopItem.id === 'messages' && (
                        <>
                          <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Напишіть першим до match&apos;у</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Додайте фото або відео</span>
                          </div>
                        </>
                      )}
                      {selectedShopItem.id === 'boost' && (
                        <>
                          <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Ваш профіль буде показано першим</span>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">Дійсний 30 хвилин</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setShowShopCheckout(false)}
                      className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition-all transform hover:scale-105"
                    >
                      Скасувати
                    </button>
                    <button 
                      onClick={nextShopStep}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    >
                      <span>Продовжити</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {shopCheckoutStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      <User className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Контактна інформація</h3>
                    <p className="text-xl text-gray-600">Потрібно для активації {selectedShopItem.name.toLowerCase()}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <User className="w-5 h-5 mr-2 text-pink-500" />
                        Ім&apos;я та прізвище
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={shopFormData.name}
                        onChange={handleShopInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="Введіть ваше ім'я"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-pink-500" />
                        Email адреса
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={shopFormData.email}
                        onChange={handleShopInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-pink-500" />
                        Номер телефону
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={shopFormData.phone}
                        onChange={handleShopInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="+380 (XX) XXX XX XX"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Захист даних</h4>
                        <p className="text-blue-700 text-sm">Ваша інформація захищена та використовується тільки для активації {selectedShopItem.name.toLowerCase()}. Ми ніколи не передаємо дані третім особам.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={prevShopStep}
                      className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition-all transform hover:scale-105"
                    >
                      Назад
                    </button>
                    <button 
                      onClick={nextShopStep}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    >
                      <span>Продовжити</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {shopCheckoutStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      <CreditCard className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">Платіжна інформація</h3>
                    <p className="text-xl text-gray-600">Безпечна оплата карткою</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-pink-500" />
                        Номер картки
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={shopFormData.cardNumber}
                        onChange={handleShopInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Термін дії
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={shopFormData.expiryDate}
                          onChange={handleShopInputChange}
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          CVV код
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={shopFormData.cvv}
                          onChange={handleShopInputChange}
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-lg"
                          placeholder="123"
                          maxLength="3"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 mb-2">Безпечна оплата</h4>
                        <p className="text-green-700 text-sm mb-2">Ваші дані захищені 256-бітним SSL шифруванням</p>
                        <div className="flex items-center space-x-4 text-xs text-green-600">
                          <span>🔒 SSL захист</span>
                          <span>💳 PCI DSS</span>
                          <span>🛡️ 3D Secure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={prevShopStep}
                      className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition-all transform hover:scale-105"
                    >
                      Назад
                    </button>
                    <button 
                      onClick={handleShopPurchase}
                      disabled={isLoading}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Обробка оплати...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          <span>Оплатити {selectedShopItem.selectedPackage.price}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {shopCheckoutStep === 4 && (
                <div className="text-center space-y-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Check className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Оплата успішна! 🎉</h3>
                    <p className="text-xl text-gray-600 mb-2">Ваші {selectedShopItem.name.toLowerCase()} активовані</p>
                    <p className="text-gray-500">Деталі надіслані на вашу email адресу</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-8 border border-pink-200">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                        {selectedShopItem.icon}
                      </div>
                      <span className="text-2xl font-bold text-gray-800">Вітаємо з покупкою!</span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{selectedShopItem.selectedPackage.count}</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Миттєва активація</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Без обмежень на використання</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm">
                      Тепер ви можете використовувати {selectedShopItem.name.toLowerCase()}. Перевірте email для підтвердження та інструкцій.
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://t.me/VevyneDatingBot?start=start"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Перейти до бота</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <button 
                      onClick={() => {
                        setShowShopCheckout(false);
                        setShopCheckoutStep(1);
                        setShopFormData({
                          name: '', email: '', phone: '', cardNumber: '', 
                          expiryDate: '', cvv: ''
                        });
                      }}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Готово
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BubbluidateWebsite;