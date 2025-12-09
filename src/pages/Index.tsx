import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [competitorPrice, setCompetitorPrice] = useState(800);
  const [monthlyUsage, setMonthlyUsage] = useState(50);
  const [savings, setSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);

  const plans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: 390,
      period: 'месяц',
      data: 'Безлимит',
      speed: '30 Мбит/с',
      features: ['Безлимитный интернет', 'Соцсети без ограничений', 'Мессенджеры', 'Бесплатная доставка'],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'standard',
      name: 'Стандарт',
      price: 590,
      period: 'месяц',
      data: 'Безлимит',
      speed: '50 Мбит/с',
      features: ['Безлимитный интернет', 'Высокая скорость', 'Соцсети без ограничений', 'Музыка и видео', '100 минут на другие номера'],
      popular: true,
      color: 'from-orange-500 to-pink-500'
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: 890,
      period: 'месяц',
      data: 'Безлимит',
      speed: '100 Мбит/с',
      features: ['Безлимитный интернет', 'Максимальная скорость', 'Все соцсети и сервисы', '300 минут на другие номера', 'Приоритетная поддержка'],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const advantages = [
    {
      icon: 'Zap',
      title: 'Молниеносная скорость',
      description: 'До 100 Мбит/с для комфортного серфинга и стриминга'
    },
    {
      icon: 'Shield',
      title: 'Надежное покрытие',
      description: '99% территории России в зоне действия сети'
    },
    {
      icon: 'Infinity',
      title: 'Действительно безлимит',
      description: 'Никаких скрытых ограничений и дополнительных условий'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Всегда на связи, чтобы помочь вам'
    },
    {
      icon: 'Smartphone',
      title: 'Простое подключение',
      description: 'Получите SIM-карту за 1 день с бесплатной доставкой'
    },
    {
      icon: 'Wallet',
      title: 'Выгодные цены',
      description: 'Лучшие тарифы на рынке без переплат'
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Перешёл на SimFree 3 месяца назад - лучшее решение! Реально безлимит, скорость отличная, поддержка всегда помогает.',
      date: 'Неделю назад',
      avatar: '👨‍💼'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Экономлю 300₽ каждый месяц по сравнению со старым оператором. Качество связи даже лучше стало!',
      date: '2 недели назад',
      avatar: '👩‍💻'
    },
    {
      name: 'Дмитрий П.',
      rating: 5,
      text: 'Пользуюсь полгода, ни разу не пожалел. Скорость стабильная даже в метро, безлимит без ограничений.',
      date: 'Месяц назад',
      avatar: '👨‍🎓'
    },
    {
      name: 'Елена В.',
      rating: 5,
      text: 'Оформила онлайн, доставили на следующий день. Все четко и быстро. Рекомендую!',
      date: '3 дня назад',
      avatar: '👩‍🔬'
    }
  ];

  useEffect(() => {
    const ourPrice = 590;
    const monthlySave = competitorPrice - ourPrice;
    setSavings(monthlySave);
    setYearlySavings(monthlySave * 12);
  }, [competitorPrice]);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заказ! Наш менеджер свяжется с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Icon name="Smartphone" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SimFree
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#plans" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Тарифы</a>
              <a href="#advantages" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Преимущества</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">О нас</a>
              <a href="#order" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 text-sm">
            🔥 Специальное предложение
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            Безлимитный интернет<br />от 390₽ в месяц
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Выгодные тарифы с настоящим безлимитом. Высокая скорость, стабильное соединение и никаких скрытых условий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6">
              <Icon name="Zap" className="mr-2" size={20} />
              Выбрать тариф
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="plans" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Выберите свой тариф
            </h2>
            <p className="text-xl text-gray-600">
              Сравните планы и выберите идеальный для вас
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  plan.popular ? 'border-4 border-purple-600 shadow-xl' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 text-sm font-bold">
                    ⭐ Популярный
                  </div>
                )}
                <CardHeader className="pt-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <Icon name="Smartphone" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-3xl text-center">{plan.name}</CardTitle>
                  <CardDescription className="text-center text-lg">
                    <div className="text-5xl font-bold text-gray-900 my-4">
                      {plan.price}₽
                      <span className="text-lg font-normal text-gray-500">/{plan.period}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-semibold">Интернет:</span>
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">{plan.data}</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-semibold">Скорость:</span>
                      <Badge variant="outline" className="border-purple-600 text-purple-600">{plan.speed}</Badge>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}
                    onClick={() => {
                      setSelectedPlan(plan.id);
                      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Калькулятор экономии
            </h2>
            <p className="text-xl text-gray-600">
              Узнайте, сколько сможете сэкономить с SimFree
            </p>
          </div>

          <Card className="border-2 border-purple-100 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="competitor" className="text-lg mb-3 block">
                    Текущий платеж у другого оператора
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="competitor"
                      type="number"
                      value={competitorPrice}
                      onChange={(e) => setCompetitorPrice(Number(e.target.value))}
                      className="h-14 text-xl"
                      min="0"
                      max="5000"
                    />
                    <span className="text-2xl font-bold">₽</span>
                  </div>
                  <input
                    type="range"
                    value={competitorPrice}
                    onChange={(e) => setCompetitorPrice(Number(e.target.value))}
                    min="200"
                    max="2000"
                    step="50"
                    className="w-full mt-4 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <p className="text-sm text-gray-500 mt-2">Переместите ползунок</p>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-6">
                    <div className="text-center mb-4">
                      <Icon name="PiggyBank" className="mx-auto mb-2" size={48} />
                      <h3 className="text-2xl font-bold mb-2">Ваша экономия</h3>
                    </div>
                    
                    {savings > 0 ? (
                      <>
                        <div className="text-center mb-4">
                          <div className="text-5xl font-extrabold mb-1">
                            {savings}₽
                          </div>
                          <div className="text-lg opacity-90">в месяц</div>
                        </div>
                        
                        <div className="border-t border-white/30 pt-4 text-center">
                          <div className="text-3xl font-bold mb-1">
                            {yearlySavings.toLocaleString()}₽
                          </div>
                          <div className="text-lg opacity-90">за год</div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-lg">Наш тариф уже выгоднее! 🎉</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Наш тариф "Стандарт" всего <span className="font-bold text-purple-600">590₽/месяц</span> с безлимитным интернетом
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Перейти на выгодный тариф
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Мы создали идеальные условия для ваших потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="border-2 border-purple-100 hover:border-purple-600 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <Icon name={advantage.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Отзывы наших клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Более 500 000 довольных пользователей уже с нами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-purple-100 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl">
                        {review.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
              <Icon name="Award" size={24} />
              <span>Средняя оценка 4.9/5 на основе 12 500+ отзывов</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            О компании SimFree
          </h2>
          <p className="text-xl leading-relaxed mb-8 opacity-90">
            Мы — команда профессионалов, создавшая сервис мобильной связи нового поколения. 
            Наша миссия — предоставить каждому доступ к качественному безлимитному интернету 
            по честной цене. Более 500 000 довольных клиентов уже выбрали SimFree.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl font-bold mb-2">500К+</div>
              <div className="text-lg opacity-90">Активных пользователей</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Покрытие России</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-lg opacity-90">Рейтинг клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Оформить заказ
            </h2>
            <p className="text-xl text-gray-600">
              Заполните форму, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <Card className="border-2 border-purple-100 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    required 
                    className="mt-2 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">Номер телефона</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    required 
                    className="mt-2 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@mail.ru" 
                    className="mt-2 h-12"
                  />
                </div>

                <div>
                  <Label className="text-base mb-3 block">Выберите тариф</Label>
                  <Tabs value={selectedPlan || 'standard'} onValueChange={setSelectedPlan} className="w-full">
                    <TabsList className="grid grid-cols-3 w-full h-auto">
                      {plans.map(plan => (
                        <TabsTrigger 
                          key={plan.id} 
                          value={plan.id}
                          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white py-3"
                        >
                          {plan.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                <div>
                  <Label htmlFor="address" className="text-base">Адрес доставки</Label>
                  <Input 
                    id="address" 
                    placeholder="Москва, ул. Примерная, д. 1, кв. 1" 
                    required 
                    className="mt-2 h-12"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-14 text-lg"
                >
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Оформить заказ
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Icon name="Smartphone" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">SimFree</span>
              </div>
              <p className="text-gray-400">
                Безлимитный интернет по выгодным ценам
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Тарифы</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#plans" className="hover:text-white transition-colors">Базовый</a></li>
                <li><a href="#plans" className="hover:text-white transition-colors">Стандарт</a></li>
                <li><a href="#plans" className="hover:text-white transition-colors">Премиум</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#advantages" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#order" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 555-35-35</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@simfree.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SimFree. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;