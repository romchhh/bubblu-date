import { Heart, Shield, Eye, Lock, User, Mail, Phone, Calendar, Gift, Crown, Flame, TrendingUp, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Політика приватності | Vevyne",
  description: "Політика приватності Vevyne - додатку для знайомств та спілкування в Україні.",
};

export default function TermsOfPolicy() {
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
                Vevyne
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
                Політика приватності
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-pink-500" />
                  1. Загальні положення
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ця Політика приватності описує, як Vevyne (далі - &ldquo;ми&rdquo;, &ldquo;наш&rdquo;, &ldquo;нас&rdquo;) збирає, використовує, 
                  зберігає та захищає вашу персональну інформацію при використанні нашого додатку для знайомств 
                  та спілкування.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Використовуючи наш сервіс, ви погоджуєтеся з цією Політикою приватності. Якщо ви не згодні 
                  з будь-якою частиною цієї політики, будь ласка, не використовуйте наш сервіс.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <User className="w-6 h-6 mr-3 text-pink-500" />
                  2. Яку інформацію ми збираємо
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Персональна інформація</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Ім&apos;я та прізвище</li>
                  <li>Вік та дата народження</li>
                  <li>Стать</li>
                  <li>Місцезнаходження (місто, країна)</li>
                  <li>Номер телефону</li>
                  <li>Email адреса</li>
                  <li>Фотографії профілю</li>
                  <li>Особисті інтереси та хобі</li>
                  <li>Освіта та професія</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Технічна інформація</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>IP адреса</li>
                  <li>Тип пристрою та операційна система</li>
                  <li>Ідентифікатор пристрою</li>
                  <li>Дані про використання додатку</li>
                  <li>Логи активності</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-pink-500" />
                  3. Як ми використовуємо вашу інформацію
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-pink-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Основні цілі</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Створення та підтримка вашого профілю</li>
                      <li>• Підбір відповідних партнерів</li>
                      <li>• Забезпечення безпеки сервісу</li>
                      <li>• Покращення якості сервісу</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Додаткові цілі</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Надсилання сповіщень</li>
                      <li>• Технічна підтримка</li>
                      <li>• Аналітика та статистика</li>
                      <li>• Маркетингові повідомлення</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-pink-500" />
                  4. Захист ваших даних
                </h2>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">Рівень безпеки</h4>
                      <p className="text-green-700 text-sm mb-2">
                        Ми використовуємо найсучасніші методи захисту даних:
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-green-600">
                        <span>🔒 SSL шифрування</span>
                        <span>🛡️ Двофакторна автентифікація</span>
                        <span>🔐 Шифрування бази даних</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Всі дані передаються через зашифроване з&apos;єднання (SSL/TLS)</li>
                  <li>Персональні дані зберігаються на захищених серверах</li>
                  <li>Доступ до даних мають тільки авторизовані співробітники</li>
                  <li>Регулярні аудити безпеки та оновлення системи</li>
                  <li>Резервне копіювання даних для запобігання втраті</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-pink-500" />
                  5. Передача даних третім особам
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ми НЕ продаємо, не здаємо в оренду та не передаємо вашу персональну інформацію третім особам, 
                  за винятком наступних випадків:
                </p>
                
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>З вашої явної згоди</li>
                  <li>Для виконання послуг (наприклад, платіжні системи)</li>
                  <li>При виконанні вимог законодавства</li>
                  <li>Для захисту наших прав та безпеки користувачів</li>
                  <li>При злитті або продажу компанії (з попереднім повідомленням)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-pink-500" />
                  6. Ваші права
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">Право на доступ</h3>
                      <p className="text-blue-700 text-sm">Ви можете запитувати копію ваших даних</p>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-xl p-4">
                      <h3 className="font-semibold text-yellow-800 mb-2">Право на виправлення</h3>
                      <p className="text-yellow-700 text-sm">Ви можете оновити або виправити неточні дані</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-xl p-4">
                      <h3 className="font-semibold text-red-800 mb-2">Право на видалення</h3>
                      <p className="text-red-700 text-sm">Ви можете видалити свій профіль та дані</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-4">
                      <h3 className="font-semibold text-green-800 mb-2">Право на обмеження</h3>
                      <p className="text-green-700 text-sm">Ви можете обмежити обробку ваших даних</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-pink-500" />
                  7. Зв&apos;язок з нами
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Якщо у вас є питання щодо цієї Політики приватності або ви хочете скористатися своїми правами, 
                  зв&apos;яжіться з нами:
                </p>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Контактна інформація</h3>
                      <div className="space-y-2 text-gray-700">
                        <p className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-pink-500" />
                          privacy@vevyne.com
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

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-pink-500" />
                  8. Зміни в Політиці приватності
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  Ми можемо оновлювати цю Політику приватності час від часу. Про будь-які зміни ми повідомимо вас 
                  через сервіс або email. Рекомендуємо періодично переглядати цю сторінку для ознайомлення з актуальною 
                  версією.
                </p>
              </section>

              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Дякуємо за довіру!</h2>
                <p className="text-lg opacity-90">
                  Ваша приватність - наш пріоритет. Ми робимо все можливе для захисту ваших даних та забезпечення 
                  безпечного використання нашого сервісу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
