import { Heart, Shield, Eye, Lock, User, Mail, Phone, Calendar, Gift, Crown, Flame, TrendingUp, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Політика конфіденційності | Vevyne",
  description: "Політика конфіденційності Vevyne — сервісу для знайомств та спілкування в Україні та ЄС.",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-1 text-gray-900">
                Privacy Policy (Політика конфіденційності)
              </h1>
              <p className="text-gray-500">Останнє оновлення: 16.09.2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Збір інформації</h2>
                <p className="text-gray-700 leading-relaxed mb-3">1.1. Для надання Сервісу ми можемо збирати наступну інформацію:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Основні дані користувача: ім’я, вік, стать, контактні дані (Telegram ID, електронна пошта, якщо надається).</li>
                  <li>Дані профілю: фото, інтереси, освіта, тип особистості, ціль використання сервісу, орієнтація, знак зодіаку та інші параметри, які користувач вводить для створення анкети.</li>
                  <li>Геолокаційні дані (якщо користувач активував функцію пошуку за місцем розташування).</li>
                  <li>Дані про використання Сервісу: історія лайків, переглядів профілів, повідомлень та взаємодій у Сервісі.</li>
                  <li>Дані про платежі та підписки (транзакції, платіжні системи, суми, дати), якщо користувач користується платними функціями.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">1.2. Ми можемо автоматично збирати інформацію про пристрій та його параметри, такі як тип пристрою, версія операційної системи, IP-адреса та інші технічні дані для безпечної роботи Сервісу.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Використання інформації</h2>
                <p className="text-gray-700 leading-relaxed mb-3">Ми використовуємо зібрані дані для:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Надання та покращення функцій Сервісу.</li>
                  <li>Забезпечення персоналізованого пошуку та підбору співрозмовників.</li>
                  <li>Відправки повідомлень, сповіщень та оновлень щодо Сервісу.</li>
                  <li>Обробки платежів та управління платними функціями.</li>
                  <li>Забезпечення безпеки користувачів, виявлення шахрайства та порушень правил.</li>
                  <li>Виконання вимог чинного законодавства України та міжнародного права.</li>
                </ul>
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <h4 className="text-blue-800 font-semibold mb-2">Навіщо ми використовуємо ваші дані</h4>
                  <p className="text-blue-700 text-sm">Персоналізація підбору, сповіщення щодо активності та безпека спільноти — ключові причини обробки інформації.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Передача та розкриття інформації</h2>
                <p className="text-gray-700 leading-relaxed mb-2">3.1. Ми не продаємо, не здаємо в оренду та не передаємо персональні дані третім особам без вашої згоди, окрім випадків:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Виконання вимог законодавства або судових рішень.</li>
                  <li>Захисту прав, безпеки та власності Сервісу або його користувачів.</li>
                  <li>Використання платіжних систем для обробки транзакцій.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">3.2. Ми можемо використовувати агреговані та анонімізовані дані для аналітики та покращення Сервісу.</p>
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                  <h4 className="text-yellow-800 font-semibold mb-2">Важливо</h4>
                  <p className="text-yellow-700 text-sm">Передача даних відбувається лише за законом або для здійснення платежів. Ми не продаємо персональні дані.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cookies та подібні технології</h2>
                <p className="text-gray-700 leading-relaxed mb-2">4.1. Сервіс може використовувати cookies та схожі технології для:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Запам’ятовування налаштувань користувача.</li>
                  <li>Підвищення безпеки та зручності використання Сервісу.</li>
                  <li>Аналітики використання Сервісу для покращення продукту.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">4.2. Користувач може відключити cookies у налаштуваннях свого пристрою або на офіційному сайті сервісу, проте це може обмежити функціональність Сервісу.</p>
                <div className="mt-6 bg-purple-50 border border-purple-200 rounded-2xl p-6">
                  <h4 className="text-purple-800 font-semibold mb-2">Підказка</h4>
                  <p className="text-purple-700 text-sm">Вимкнення cookies може вплинути на роботу входу, збереження налаштувань та якість підбору.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Захист даних</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>5.1. Ми застосовуємо технічні та організаційні заходи для захисту персональних даних користувачів від несанкціонованого доступу, втрати або розголошення.</li>
                  <li>5.2. Користувачі несуть відповідальність за збереження конфіденційності своїх облікових даних та паролів.</li>
                </ul>
                <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h4 className="text-green-800 font-semibold mb-2">Як ми захищаємо дані</h4>
                  <ul className="list-disc pl-6 text-green-700 space-y-1 text-sm">
                    <li>Шифрування передавання та зберігання (де можливо).</li>
                    <li>Контроль доступу та журналювання дій.</li>
                    <li>Регулярні оновлення інфраструктури та резервні копії.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Збереження даних</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>6.1. Персональні дані зберігаються протягом терміну, необхідного для надання Сервісу та виконання правових зобов’язань.</li>
                  <li>6.2. Дані можуть зберігатися довше у випадку законних підстав, наприклад, для вирішення спорів або дотримання законодавства.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Права користувача</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Отримати доступ до своїх персональних даних.</li>
                  <li>Виправити або оновити неточні дані.</li>
                  <li>Вимагати видалення даних (за винятком випадків, коли їх зберігання є обов’язковим за законом).</li>
                </ul>
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <h4 className="text-blue-800 font-semibold mb-2">Як скористатися правами</h4>
                  <p className="text-blue-700 text-sm">Зверніться до підтримки з вашим Telegram ID та описом запиту — ми опрацюємо звернення у розумні строки.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Вікові обмеження</h2>
                <p className="text-gray-700 leading-relaxed">Сервіс розрахований на користувачів віком тільки від 18 років.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Зміни до Політики</h2>
                <p className="text-gray-700 leading-relaxed">Адміністрація має право змінювати цю Політику конфіденційності. Нові редакції набирають чинності з моменту публікації у Сервісі. Подальше користування Сервісом після змін означає згоду користувача з оновленою Політикою.</p>
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                  <h4 className="text-yellow-800 font-semibold mb-2">Повідомлення про зміни</h4>
                  <p className="text-yellow-700 text-sm">Ми можемо інформувати про оновлення у Сервісі, через email або інші канали зв’язку.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Контакти</h2>
                <p className="text-gray-700 leading-relaxed mb-2">З усіх питань можна звернутись до служби підтримки:</p>
                <p className="text-gray-700 leading-relaxed mb-4">Telegram: <a className="text-blue-600 underline" href="https://t.me/VevyneSupport" target="_blank" rel="noopener noreferrer">@VevyneSupport</a></p>
                <p className="text-gray-700 leading-relaxed">Для належного розгляду звернення Користувач зобов’язаний надати опис проблеми та супутню інформацію: Telegram ID, параметри середовища (браузер, версія) та, у разі проблем з оплатою, — дату, час, суму платежу і підтверджувальні документи (квитанцію або її копію).</p>
              </section>

              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Дякуємо за довіру!</h2>
                <p className="text-lg opacity-90">Ваша приватність — наш пріоритет. Ми робимо все можливе для захисту ваших даних та забезпечення безпечного використання нашого сервісу.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
