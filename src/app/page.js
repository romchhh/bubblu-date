'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Users, Shield, Zap, Star, Check, ArrowRight, Menu, X, MapPin, MessageCircle, Sparkles, CreditCard, User, Mail, Phone, Calendar, Gift, Crown, Flame, TrendingUp } from 'lucide-react';

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

  // Анімація при завантаженні
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
      price: '$15.00',
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
      text: "Познайомилася з чоловіком своєї мечти через Bubblu! Алгоритм дійсно працює.",
      rating: 5,
      location: "Київ"
    },
    {
      name: "Михайло Т.",
      text: "Найкращий додаток для знайомств в Україні. Безпечно та ефективно!",
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
      question: "Що таке SuperLike?",
      answer: "SuperLike - це спеціальний лайк, який показує вашу особливу зацікавленість. Людина одразу побачить, що ви їй сподобались."
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
      answer: "Ви можете написати нам в Telegram боті @Bubblu_Date_Bot або на email support@bubbludate.com. Ми відповідаємо протягом 24 годин."
    },
    {
      question: "Чи працює додаток в усіх країнах?",
      answer: "Наразі додаток працює в Україні та країнах ЄС. Ми плануємо розширити географію в найближчі місяці."
    },
    {
      question: "Як захистити свою приватність?",
      answer: "Ви можете налаштувати рівень приватності в профілі: приховати вік, локацію, або зробити профіль видимим тільки для певних користувачів."
    }
  ];

  const shopItems = [
    {
      id: 'superlikes',
      name: 'SuperLike',
      icon: <Star className="w-6 h-6" />,
      description: 'Покажи особливу зацікавленість',
      packages: [
        { count: '5 SuperLike', price: '$4.99', popular: false },
        { count: '10 SuperLike', price: '$8.99', popular: true },
        { count: '20 SuperLike', price: '$15.99', popular: false }
      ]
    },
    {
      id: 'messages',
      name: 'Повідомлення',
      icon: <MessageCircle className="w-6 h-6" />,
      description: 'Перший крок - напиши першим',
      packages: [
        { count: '5 повідомлень', price: '$3.99', popular: false },
        { count: '10 повідомлень', price: '$6.99', popular: true },
        { count: '20 повідомлень', price: '$11.99', popular: false }
      ]
    },
    {
      id: 'boost',
      name: 'Підвищення',
      icon: <Flame className="w-6 h-6" />,
      description: 'Твій профіль буде показано першим',
      packages: [
        { count: '1 підвищення', price: '$1.99', popular: false },
        { count: '3 підвищення', price: '$4.99', popular: true },
        { count: '5 підвищень', price: '$7.99', popular: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Bubbludate
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-pink-600 transition-colors">Особливості</a>
              <a href="#pricing" className="text-gray-700 hover:text-pink-600 transition-colors">Ціни</a>
              <a href="#shop" className="text-gray-700 hover:text-pink-600 transition-colors">Магазин</a>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-600 transition-colors">Відгуки</a>
              <a href="#faq" className="text-gray-700 hover:text-pink-600 transition-colors">FAQ</a>
              <a 
                href="https://t.me/Bubblu_Date_Bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2"
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
              <a href="#features" className="block px-3 py-2 text-gray-700">Особливості</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700">Ціни</a>
              <a href="#shop" className="block px-3 py-2 text-gray-700">Магазин</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700">Відгуки</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700">FAQ</a>
              <a 
                href="https://t.me/Bubblu_Date_Bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-left bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Перейти до бота</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`inline-flex items-center space-x-2 bg-white/70 rounded-full px-6 py-2 mb-8 transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Sparkles className="w-5 h-5 text-pink-500 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-medium text-gray-700">Найкращий додаток для знайомств в Україні</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              Знайди свою
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '1s' }}>
              ідеальну пару!
            </span>
          </h1>
          
          <p className={`text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            Bubblu - це не просто додаток для знайомств, це твій найкращий друг у пошуку справжнього кохання. 
            З&apos;єднуємо серця та душі людей, які дійсно підходять один одному.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <a 
              href="https://t.me/Bubblu_Date_Bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Перейти до бота</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-pink-500 hover:text-pink-600 transition-all transform hover:scale-105 hover:shadow-lg">
              Дізнатися більше
            </button>
          </div>

          {/* Hero Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="bg-white/70 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/80 transition-all transform hover:scale-105 hover:shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6" />
                <span>100K+</span>
              </div>
              <div className="text-gray-600">Активних користувачів</div>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/80 transition-all transform hover:scale-105 hover:shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2 flex items-center space-x-2">
                <Heart className="w-6 h-6" />
                <span>50K+</span>
              </div>
              <div className="text-gray-600">Успішних пар</div>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/80 transition-all transform hover:scale-105 hover:shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2 flex items-center space-x-2">
                <Star className="w-6 h-6" />
                <span>4.9★</span>
              </div>
              <div className="text-gray-600">Рейтинг користувачів</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Чому саме Bubblu?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ми створили найрозумніший алгоритм пошуку партнера з максимальною безпекою та зручністю
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 transform hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Обери свій план
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Різні варіанти для різних потреб. Почни з безкоштовної версії або отримай всі можливості з Premium
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">
                Популярний
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Premium підписка</h3>
                <div className="text-4xl font-bold mb-2">$15.00</div>
                <div className="text-white/80 mb-8">на місяць</div>
                
                <div className="space-y-3 mb-8">
                  {pricingPlans[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-white" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-white text-pink-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Придбати Premium
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-4 bg-white">
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
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
                      {pkg.popular && (
                        <div className="text-xs text-pink-600 font-medium mt-1">Популярний</div>
                      )}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => {
                    setSelectedShopItem({ ...item, selectedPackage: item.packages[1] });
                    setShowShop(true);
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Купити
                </button>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Що кажуть користувачі
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
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
      <section id="faq" className="py-16 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Часті запитання
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовий знайти справжнє кохання?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Приєднуйся до тисяч щасливих пар, які знайшли одне одного через Bubblu!
          </p>
          <button className="bg-white text-pink-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
            Почати зараз - це безкоштовно!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Bubbludate</span>
              </div>
              <p className="text-gray-400">
                Найкращий додаток для знайомств в Україні. З&apos;єднуємо серця!
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Продукт</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Особливості</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ціни</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Підтримка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Зв&apos;язатися з нами</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безпека</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Правова інформація</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Політика приватності</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Умови використання</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bubbludate. Всі права захищені.</p>
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
                      href="https://t.me/Bubblu_Date_Bot" 
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
                  href="https://t.me/Bubblu_Date_Bot" 
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
                      href="https://t.me/Bubblu_Date_Bot" 
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