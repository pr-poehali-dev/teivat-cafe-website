import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const menuCategories = [
    {
      title: "Закуски",
      items: [
        { name: "Тропические роллы", price: "450₽", description: "Роллы с манго и авокадо" },
        { name: "Кокосовые креветки", price: "590₽", description: "Хрустящие креветки в кокосовой панировке" }
      ]
    },
    {
      title: "Основные блюда", 
      items: [
        { name: "Карри по-тайски", price: "690₽", description: "Нежное карри с кокосовым молоком" },
        { name: "Гриль-рыба в тропических специях", price: "850₽", description: "Свежая рыба с экзотическими травами" }
      ]
    },
    {
      title: "Напитки",
      items: [
        { name: "Манговый смузи", price: "320₽", description: "Свежий манго с кокосовым молоком" },
        { name: "Тропический коктейль", price: "480₽", description: "Микс экзотических фруктов" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-tropical-turquoise/10 to-tropical-yellow/10">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-tropical-turquoise/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-tropical-orange to-tropical-yellow rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌴</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-tropical-orange to-tropical-turquoise bg-clip-text text-transparent">
                Тейват Кафе
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#menu" className="text-tropical-green hover:text-tropical-orange transition-colors">Меню</a>
              <a href="#events" className="text-tropical-green hover:text-tropical-orange transition-colors">Мероприятия</a>
              <a href="#about" className="text-tropical-green hover:text-tropical-orange transition-colors">О нас</a>
              <a href="#contact" className="text-tropical-green hover:text-tropical-orange transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tropical-orange via-tropical-yellow to-tropical-turquoise bg-clip-text text-transparent animate-fade-in">
              Оазис вкуса и отдыха
            </h1>
            <p className="text-xl md:text-2xl text-tropical-green mb-8 max-w-3xl mx-auto">
              Добро пожаловать в Тейват Кафе - кусочек тропического рая в вашем городе! 
              Здесь вас ждут вкуснейшие блюда, освежающие напитки и незабываемая атмосфера
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-tropical-orange hover:bg-tropical-orange/90 text-white px-8 py-3 text-lg">
                <Icon name="Menu" className="mr-2" />
                Посмотреть меню
              </Button>
              <Button size="lg" variant="outline" className="border-tropical-turquoise text-tropical-turquoise hover:bg-tropical-turquoise hover:text-white px-8 py-3 text-lg">
                <Icon name="Calendar" className="mr-2" />
                Забронировать столик
              </Button>
            </div>
          </div>
          <div className="relative mt-12">
            <img 
              src="/img/8ddfe594-0117-486f-b43c-2e5e1c2cdcb1.jpg" 
              alt="Интерьер Тейват Кафе" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tropical-green mb-4">Наше меню</h2>
            <p className="text-xl text-tropical-green/80">Путешествие по тропическим вкусам!</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300 border-tropical-turquoise/20">
                <CardHeader>
                  <CardTitle className="text-tropical-orange text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-tropical-turquoise/10 pb-3 last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-tropical-green">{item.name}</h4>
                          <Badge variant="outline" className="border-tropical-orange text-tropical-orange">
                            {item.price}
                          </Badge>
                        </div>
                        <p className="text-sm text-tropical-green/70">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <img 
              src="/img/e01c89d0-a698-48cc-beab-822b86957234.jpg" 
              alt="Тропические блюда" 
              className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tropical-green mb-4">Мероприятия</h2>
            <p className="text-xl text-tropical-green/80">Идеальное место для вашего праздника!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-tropical-orange mb-6">Мы проводим мероприятия любого формата:</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Gift" className="text-tropical-turquoise" />
                  <span className="text-tropical-green">Детские праздники</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" className="text-tropical-turquoise" />
                  <span className="text-tropical-green">Дни рождения</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-tropical-turquoise" />
                  <span className="text-tropical-green">Корпоративы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Star" className="text-tropical-turquoise" />
                  <span className="text-tropical-green">Тематические вечера</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-tropical-orange/10 to-tropical-yellow/10 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-tropical-green mb-4">Развлечения в кафе:</h4>
                <div className="flex items-center space-x-4 mb-3">
                  <Icon name="Gamepad2" className="text-tropical-orange" size={24} />
                  <span className="text-tropical-green font-semibold">PlayStation 5</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Puzzle" className="text-tropical-orange" size={24} />
                  <span className="text-tropical-green font-semibold">Настольные игры</span>
                </div>
              </div>
            </div>
            
            <Card className="border-tropical-turquoise/20">
              <CardHeader>
                <CardTitle className="text-tropical-orange">Заявка на мероприятие</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
                <Input placeholder="Дата мероприятия" type="date" />
                <Textarea placeholder="Описание мероприятия" />
                <Button className="w-full bg-tropical-orange hover:bg-tropical-orange/90">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tropical-green mb-4">О нас</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-tropical-turquoise/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tropical-orange to-tropical-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌴</span>
                  </div>
                  <h3 className="text-2xl font-bold text-tropical-green mb-4">Наша история</h3>
                </div>
                
                <p className="text-lg text-tropical-green/80 leading-relaxed mb-6">
                  Тейват Кафе родилось из любви к тропическим вкусам и желания создать уютное место, 
                  где каждый посетитель почувствует себя как в отпуске. Мы вдохновляемся яркими красками 
                  тропиков и атмосферой приключений.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Icon name="Heart" className="text-tropical-orange mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-tropical-green mb-2">Качество продуктов</h4>
                    <p className="text-sm text-tropical-green/70">Только свежие и качественные ингредиенты</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Home" className="text-tropical-turquoise mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-tropical-green mb-2">Уютная атмосфера</h4>
                    <p className="text-sm text-tropical-green/70">Комфортное пространство для отдыха</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Smile" className="text-tropical-yellow mx-auto mb-2" size={32} />
                    <h4 className="font-semibold text-tropical-green mb-2">Лучший сервис</h4>
                    <p className="text-sm text-tropical-green/70">Внимательное обслуживание каждого гостя</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tropical-green mb-4">Контакты</h2>
            <p className="text-xl text-tropical-green/80">Мы всегда рады видеть вас!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="border-tropical-turquoise/20">
                <CardHeader>
                  <CardTitle className="text-tropical-orange">Как нас найти</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-tropical-turquoise" />
                    <span className="text-tropical-green">ул. Тропическая, 15, ТЦ "Райский сад"</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="text-tropical-turquoise" />
                    <span className="text-tropical-green">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-tropical-turquoise" />
                    <span className="text-tropical-green">info@teyvatcafe.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-tropical-turquoise" />
                    <span className="text-tropical-green">Ежедневно с 10:00 до 23:00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-tropical-turquoise/20">
              <CardHeader>
                <CardTitle className="text-tropical-orange">Обратная связь</CardTitle>
                <CardDescription>Напишите нам сообщение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Ваше сообщение" rows={4} />
                <Button className="w-full bg-tropical-turquoise hover:bg-tropical-turquoise/90">
                  <Icon name="Send" className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tropical-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-tropical-orange to-tropical-yellow rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌴</span>
              </div>
              <h3 className="text-2xl font-bold">Тейват Кафе</h3>
            </div>
            <p className="text-white/80 mb-6">Ваш тропический оазис в городе</p>
            <div className="flex justify-center space-x-6">
              <Icon name="Instagram" className="text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Facebook" className="text-white/60 hover:text-white cursor-pointer transition-colors" />
              <Icon name="MessageCircle" className="text-white/60 hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/60">&copy; 2024 Тейват Кафе. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;