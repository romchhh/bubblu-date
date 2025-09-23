import { Heart, Shield, Eye, Lock, User, Mail, Phone, Calendar, Gift, Crown, Flame, TrendingUp, ArrowLeft, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Умови користування сервісом | Vevyne",
  description: "Умови користування сервісом знайомств Vevyne в Україні та ЄС.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-1 text-gray-900">
                Terms of Service (Умови користування сервісом)
              </h1>
              <p className="text-gray-500">Останнє оновлення: 16.09.2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Загальні положення</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ці Умови користування регулюють доступ і використання сервісу знайомств Vevyne (далі – &ldquo;Сервіс&rdquo;), що надається ФОП Венгер А.Р., Україна (далі – &ldquo;Адміністрація&rdquo;). Використовуючи Сервіс, ви підтверджуєте, що прочитали, зрозуміли та погоджуєтесь з цими Умовами.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>1.1. Безоплатний Сервіс Vevyne – це Telegram-бот для знайомств, який надає користувачам можливість створювати профілі, знаходити співрозмовників, спілкуватися та користуватися іншими додатковими функціями.</li>
                  <li>1.2. Платний сервіс — всі ті ж послуги, що й у безоплатному Сервісі, але з додатковим пріоритетом та можливостями за окрему плату на разовій основі на визначений або необмежений термін.</li>
                  <li>1.3. Використання Сервісу дозволяється лише повнолітнім користувачам (18+), які знаходяться на території України та ЄС.</li>
                  <li>1.4. Користувач — будь-яка особа, яка прийняла цю угоду та користується Сервісом.</li>
                  <li>1.5. Реєструючись у Сервісі, користувач підтверджує достовірність наданих даних та погоджується з умовами Сервісу.</li>
                  <li>1.6. Використання Сервісу заборонене для користувачів з РФ та Білорусі.</li>
                  <li>1.7. Послуга пошуку та з’єднання співрозмовників - підбір випадкового користувача відповідно до заданих параметрів (за умови наявності інших учасників), після чого Користувачу надається інтерфейс для перегляду анкети та можливість взаємодії з анкетою.</li>
                  <li>1.8. Взаємодія з анкетами полягає у наданні Користувачу доступу до анкет інших користувачів, які відповідають визначеним ним критеріям пошуку, а також інтерфейсу для перегляду та подальшого використання функцій Сервісу.</li>
                </ul>
              </section>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="text-blue-800 font-semibold mb-2">Коротко</h4>
                <p className="text-blue-700 text-sm">Сервіс для дорослих користувачів (18+). Дані мають бути достовірні. РФ/Білорусь — заборонено.</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Послуги</h2>
                <p className="text-gray-700 leading-relaxed mb-2">2.1. Сервіс надає безкоштовні та платні функції.</p>
                <p className="text-gray-700 leading-relaxed mb-3">2.2. Платні функції включають:</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Розширений пошук партнера по таким критеріям:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Діапазон віку, стать.</li>
                      <li>Ціль використання сервісу, інтереси, знак зодіаку, освіта, тип особистості, орієнтація.</li>
                      <li>Пошук пари в межах 10–100 км. від тебе та до 10 км. включно.</li>
                    </ul>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Безлімітні лайки.</li>
                    <li>Безлімітні перемотки анкет.</li>
                    <li>Можливість дізнатись відразу, хто тебе вподобав.</li>
                    <li>Щоденні топ-пропозиції від Сервісу (бот підбирає найкращі варіанти для match&apos;у за твоїми критеріями).</li>
                    <li>Великі лайки (лайк користувача завжди перший у списку).</li>
                    <li>Безкоштовний буст профілю на 1 годину щотижня (твій профіль частіше буде випадати в пошуку).</li>
                    <li>Перший крок (FirstStep) — можливість написати 3 рази на тиждень партнеру першим ще до створення match&apos;у.</li>
                    <li>Геолокаційний пошук (DateRadar) — можливість знайти анкети користувачів у будь-яких обраних містах і країнах.</li>
                    <li>Безпека та якість знайомств: безлімітний BlackList; контроль, що показувати в своєму профілі.</li>
                    <li>VIP-косметика профілю — видимість VIP (можна приховати).</li>
                    <li>Додаткові можливості — вставка посилань на інші соцмережі.</li>
                    <li>Без реклами — ніяких перешкод, лише знайомства.</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-3">2.3. Вартість платних послуг може змінюватися на розсуд Адміністрації.</p>
              </section>

              <div className="mt-6 bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <h4 className="text-purple-800 font-semibold mb-2">Що входить у платні можливості</h4>
                <p className="text-purple-700 text-sm">Розширений пошук, пріоритет видимості, великі лайки, FirstStep, DateRadar, відсутність реклами тощо.</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Модель монетизації та повернення коштів</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>3.1. Оплата здійснюється через доступні платіжні системи, зазначені в Сервісі.</li>
                  <li>3.2. Оплачуючи послуги, ви погоджуєтесь, що кошти не підлягають поверненню.</li>
                  <li>3.3. Реферальна програма дозволяє отримати бонуси за запрошення нових користувачів згідно з умовами, вказаними в Сервісі.</li>
                </ul>
              </section>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="text-yellow-800 font-semibold mb-2">Важливо</h4>
                <p className="text-yellow-700 text-sm">Повернення коштів не передбачене. Перед оплатою ознайомтесь з переліком функцій.</p>
              </div>

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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Політика щодо контенту</h2>
                <p className="text-gray-700 leading-relaxed mb-2">4.1. Користувач не має права розміщувати або поширювати у Сервісі:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                  <li>фейкові профілі, неправдиву інформацію чи шахрайський контент;</li>
                  <li>образи, погрози, переслідування (сталкерінг), прояви агресії;</li>
                  <li>нецензурну лексику, дискримінаційні висловлювання;</li>
                  <li>рекламу, спам чи масові розсилки;</li>
                  <li>контент сексуального характеру в анкетах.</li>
                </ul>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                  <li>4.2. Порушення цих правил може призвести до блокування акаунта без повернення коштів.</li>
                  <li>4.3. Адміністрація може вимагати верифікацію профілю.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">4.4. Користувачу забороняється:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Порушувати чинне законодавство України або закликати до його порушення.</li>
                  <li>Використовувати Сервіс для будь-яких незаконних цілей.</li>
                  <li>Здійснювати злом, втручання чи порушення роботи Сервісу.</li>
                  <li>Надсилати файли, програми чи додатки, не пов’язані з роботою Сервісу.</li>
                  <li>Виконувати перевірки безпеки чи пошуки вразливостей.</li>
                  <li>Використовувати сторонні інструменти, що не передбачені офіційним інтерфейсом.</li>
                  <li>Надсилати неправдиві скарги.</li>
                  <li>Займатися наклепом, поширювати дезінформацію чи пропаганду.</li>
                  <li>Створювати анкети з контентом ненависті до соціальних груп.</li>
                  <li>Видавати себе за Адміністрацію або державні органи.</li>
                  <li>Просити матеріальну допомогу.</li>
                  <li>Публікувати або поширювати анкети з порнографією, сценами насильства чи жорстокості.</li>
                  <li>Використовувати чужі фото як власні.</li>
                  <li>Погрожувати, шантажувати чи залякувати інших користувачів.</li>
                  <li>Обходити або намагатися обійти блокування, обмеження, фільтри Сервісу.</li>
                  <li>Використовувати анкети як рекламу сторонніх ресурсів, каналів, спільнот чи послуг.</li>
                  <li>Займатися рекламою, продажем товарів, вакансіями або спамом через анкету чи особисті повідомлення.</li>
                  <li>Розміщати фото кладовищ, місць поховань та подібного контенту.</li>
                  <li>Агресивно просувати власні соцмережі або вимагати спілкування лише поза Сервісом.</li>
                  <li>Викладати в профілі оголені фото чи інформацію сексуального характеру.</li>
                  <li>Створювати кілька анкет одночасно (виняток – втрата Telegram-акаунту).</li>
                  <li>Використовувати міста, символіку, музику чи інший контент, пов’язаний із державою-агресором.</li>
                  <li>Ображати чи принижувати Адміністрацію або поширювати неправдиву інформацію про Сервіс.</li>
                  <li>Використовувати Сервіс для пошуку відносин на матеріальній основі (ескорт, секс-робота тощо).</li>
                  <li>Принижувати або провокувати інших користувачів через анкету чи повідомлення.</li>
                </ul>
              </section>

              <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-6">
                <h4 className="text-red-800 font-semibold mb-2">Заборонено</h4>
                <p className="text-red-700 text-sm">Хейт-спіч, шахрайство, порнографія, заклики до насильства, реклама/спам, видавання себе за інших тощо.</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Відповідальність</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>5.1. Сервіс надається &ldquo;як є&rdquo; (as is), без гарантій щодо досягнення конкретних результатів.</li>
                  <li>5.2. Адміністрація не гарантує, що користувач знайде партнера або отримає бажаний результат від використання Сервісу.</li>
                  <li>5.3. Адміністрація не несе відповідальності за дії чи поведінку користувачів поза межами Сервісу.</li>
                  <li>5.4. Користувач несе повну відповідальність за інформацію, яку він надає та поширює.</li>
                  <li>5.5. Адміністрація не несе відповідальності за будь-який зовнішній контент, який публікують чи передають Користувачі. Всі можливі ризики та наслідки такого обміну інформацією є особистою відповідальністю Користувачів.</li>
                  <li>5.6. Сервіс функціонує як платформа для безпосередньої взаємодії користувачів, без модерації чи втручання Адміністрації. Уся відповідальність за законність і достовірність анкет та повідомлень покладається на Користувачів. Адміністрація не несе відповідальності за будь-які втрати чи шкоду, що можуть виникнути у зв’язку з використанням Сервісу.</li>
                </ul>
              </section>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="text-blue-800 font-semibold mb-2">Нагадування</h4>
                <p className="text-blue-700 text-sm">Сервіс надається «як є». Ми не гарантуємо результатів знайомств і не відповідаємо за дії користувачів поза Сервісом.</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Припинення доступу</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>6.1. Адміністрація має право призупинити або видалити акаунт користувача у випадку порушення цих Умов.</li>
                  <li>6.2. Припинення доступу не дає підстав для повернення сплачених коштів.</li>
                </ul>
              </section>

              <div className="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h4 className="text-orange-800 font-semibold mb-2">Порушення умов</h4>
                <p className="text-orange-700 text-sm">За порушення правил доступ може бути призупинено або припинено без повернення коштів.</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Юрисдикція та застосовне право</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>7.1. Ці Умови регулюються та тлумачаться відповідно до законодавства України.</li>
                  <li>7.2. Усі спори вирішуються у судах України згідно з чинним законодавством.</li>
                </ul>
              </section>

              <div className="mt-6 bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <h4 className="text-purple-800 font-semibold mb-2">Юридична інформація</h4>
                <p className="text-purple-700 text-sm">Спори вирішуються за законодавством України у відповідних судах.</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Контакти</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  З усіх питань можна звернутись до служби підтримки: Telegram: <a className="text-blue-600 underline" href="https://t.me/VevyneSupport" target="_blank" rel="noopener noreferrer">@VevyneSupport</a>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Для належного розгляду звернення Користувач зобов’язаний надати опис проблеми та супутню інформацію: Telegram ID, параметри середовища (браузер, версія) та, у разі проблем з оплатою, — дату, час, суму платежу і підтверджувальні документи (квитанцію або її копію).
                </p>
              </section>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6">
                <h4 className="text-green-800 font-semibold mb-2">Як звернутися</h4>
                <p className="text-green-700 text-sm">Додавайте Telegram ID і деталі звернення (дата, час, сума платежу — якщо питання з оплатою) для швидшого розгляду.</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Термін дії угоди</h2>
                <p className="text-gray-700 leading-relaxed">
                  Угода вважається укладеною з моменту початку користування Сервісом та діє до моменту її припинення з ініціативи Користувача або у зв’язку з порушенням ним умов. Опублікування нової редакції анулює попередню з моменту її розміщення. Подальше користування Сервісом розглядається як акцепт нової редакції.
                </p>
              </section>

              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Дякуємо за використання Vevyne!</h2>
                <p className="text-lg opacity-90">Ми прагнемо створити безпечну та приємну платформу для знайомств.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
