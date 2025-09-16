import { Heart, Shield, Eye, Lock, User, Mail, Phone, Calendar, Gift, Crown, Flame, TrendingUp, ArrowLeft, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Умови використання | Vevyne❣",
  description: "Умови використання Vevyne - додатку для знайомств та спілкування в Україні.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image 
                  src="/2025-09-16 17.07.34.jpg" 
                  alt="Vevyne Logo" 
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gray-800">
                Vevyne❣
              </span>
            </div>
            
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Повернутися на головну</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gray-900 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                <Shield className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Умови використання
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-pink-500" />
                  1. Загальні положення
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ці Умови використання (далі - &ldquo;Умови&rdquo;) регулюють використання додатку Vevyne❣ 
                  (далі - &ldquo;Сервіс&rdquo;, &ldquo;Додаток&rdquo;) для знайомств та спілкування.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Використовуючи наш Сервіс, ви погоджуєтеся дотримуватися цих Умов. Якщо ви не згодні 
                  з будь-якою частиною цих Умов, будь ласка, не використовуйте наш Сервіс.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <User className="w-6 h-6 mr-3 text-pink-500" />
                  2. Реєстрація та обліковий запис
                </h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Вимоги до реєстрації
                  </h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Вам повинно бути не менше 18 років</li>
                    <li>• Надати достовірну та актуальну інформацію</li>
                    <li>• Підтвердити email адресу</li>
                    <li>• Дотримуватися правил спільноти</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Відповідальність за обліковий запис</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Ви несете відповідальність за безпеку свого облікового запису</li>
                  <li>Не передавайте дані входу третім особам</li>
                  <li>Негайно повідомляйте про підозрілу активність</li>
                  <li>Оновлюйте пароль регулярно</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-pink-500" />
                  3. Правила використання
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Дозволено
                    </h3>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Створювати чесний профіль</li>
                      <li>• Шукати романтичні стосунки</li>
                      <li>• Поважати інших користувачів</li>
                      <li>• Використовувати сервіс законно</li>
                      <li>• Повідомляти про порушення</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                      <XCircle className="w-5 h-5 mr-2" />
                      Заборонено
                    </h3>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Неправдива інформація</li>
                      <li>• Непристойний контент</li>
                      <li>• Спам та реклама</li>
                      <li>• Загрози та образи</li>
                      <li>• Шахрайство</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Важливо!</h4>
                      <p className="text-yellow-700 text-sm">
                        Порушення цих правил може призвести до блокування облікового запису без попередження. 
                        Ми залишаємо за собою право видаляти контент, що порушує правила спільноти.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Crown className="w-6 h-6 mr-3 text-pink-500" />
                  4. Платні послуги
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Premium підписка</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Підписка надає доступ до додаткових функцій</li>
                  <li>Оплата здійснюється заздалегідь</li>
                  <li>Автоматичне продовження (якщо не скасовано)</li>
                  <li>Можливість скасування в будь-який час</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Магазин функцій</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Окремі функції можна купити без підписки</li>
                  <li>Оплачені функції активуються миттєво</li>
                  <li>Відсутність повернення коштів за використані функції</li>
                  <li>Ціни можуть змінюватися без попередження</li>
                </ul>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Способи оплати</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 font-bold">💳</span>
                      </div>
                      <p className="text-sm text-gray-700">Банківські картки</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 font-bold">📱</span>
                      </div>
                      <p className="text-sm text-gray-700">Мобільні платежі</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 font-bold">📞</span>
                      </div>
                      <p className="text-sm text-gray-700">Telegram</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 font-bold">💰</span>
                      </div>
                      <p className="text-sm text-gray-700">Криптовалюта</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-pink-500" />
                  5. Безпека та приватність
                </h2>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">Захист даних</h4>
                      <p className="text-green-700 text-sm mb-2">
                        Ми серйозно ставимося до захисту вашої приватності та безпеки:
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-green-600">
                        <span>🔒 Шифрування даних</span>
                        <span>🛡️ Безпечні сервери</span>
                        <span>🔐 Контроль доступу</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Ваші персональні дані захищені відповідно до GDPR</li>
                  <li>Ми не передаємо дані третім особам без вашої згоди</li>
                  <li>Ви можете видалити свій профіль в будь-який час</li>
                  <li>Регулярні аудити безпеки та оновлення системи</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-pink-500" />
                  6. Обмеження відповідальності
                </h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Важливе попередження</h4>
                      <p className="text-yellow-700 text-sm">
                        Vevyne❣️ - це платформа для знайомств. Ми не гарантуємо успішність у пошуку партнера 
                        та не несемо відповідальності за стосунки між користувачами.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Ми не несемо відповідальності за дії інших користувачів</li>
                  <li>Не гарантуємо безперебійну роботу сервісу</li>
                  <li>Не відповідаємо за збитки від використання сервісу</li>
                  <li>Можемо призупинити роботу сервісу для технічних робіт</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-pink-500" />
                  7. Модерація та санкції
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Система модерації</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Автоматична модерація контенту</li>
                  <li>Ручна перевірка скарг користувачів</li>
                  <li>Система рейтингу користувачів</li>
                  <li>Можливість скаржитися на порушення</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Види санкцій</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-yellow-600 font-bold">⚠️</span>
                    </div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Попередження</h4>
                    <p className="text-yellow-700 text-sm">За незначні порушення</p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">🔒</span>
                    </div>
                    <h4 className="font-semibold text-orange-800 mb-2">Тимчасовий бан</h4>
                    <p className="text-orange-700 text-sm">Від 1 дня до 1 місяця</p>
                  </div>
                  
                  <div className="bg-red-50 rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">❌</span>
                    </div>
                    <h4 className="font-semibold text-red-800 mb-2">Постійний бан</h4>
                    <p className="text-red-700 text-sm">За серйозні порушення</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-pink-500" />
                  8. Зміни в Умовах
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ми можемо оновлювати ці Умови час від часу. Про будь-які зміни ми повідомимо вас 
                  через додаток, email або на нашому сайті. Продовження використання Сервісу після 
                  змін означає вашу згоду з новими Умовами.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Як ми повідомляємо про зміни</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Сповіщення в додатку</li>
                    <li>• Email розсилка</li>
                    <li>• Оголошення на сайті</li>
                    <li>• Telegram канал</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-pink-500" />
                  9. Зв&apos;язок з нами
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Якщо у вас є питання щодо цих Умов або ви хочете повідомити про порушення, 
                  зв&apos;яжіться з нами:
                </p>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Контактна інформація</h3>
                      <div className="space-y-2 text-gray-700">
                        <p className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-pink-500" />
                          support@vevyne.com
                        </p>
                        <p className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-pink-500" />
                          +380 (XX) XXX XX XX
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Telegram підтримка</h3>
                      <a 
                        href="https://t.me/Vevyne_Support" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <span>@Vevyne_Support</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Дякуємо за використання Vevyne❣️!</h2>
                <p className="text-lg opacity-90">
                  Ми прагнемо створити безпечну та приємну платформу для знайомств. 
                  Дотримуйтесь цих Умов, і разом ми зробимо наш сервіс ще кращим!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
