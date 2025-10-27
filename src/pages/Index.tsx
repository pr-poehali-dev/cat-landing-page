import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breeds = [
    {
      name: 'Британская короткошёрстная',
      description: 'Спокойные и дружелюбные кошки с плюшевой шерстью',
      image: 'https://cdn.poehali.dev/projects/adb4a3e5-271e-4956-b893-1ff3cfc618ba/files/2a4d02fa-22b9-45e2-beaf-e24d55edc3b8.jpg',
      traits: ['Независимые', 'Спокойные', 'Ласковые']
    },
    {
      name: 'Персидская',
      description: 'Длинношёрстные красавцы с милым характером',
      image: 'https://cdn.poehali.dev/projects/adb4a3e5-271e-4956-b893-1ff3cfc618ba/files/73a79103-f106-4280-b758-bb331a17f990.jpg',
      traits: ['Спокойные', 'Ласковые', 'Домашние']
    },
    {
      name: 'Сиамская',
      description: 'Активные и общительные кошки с яркой внешностью',
      image: 'https://cdn.poehali.dev/projects/adb4a3e5-271e-4956-b893-1ff3cfc618ba/files/f819bf47-d369-4fa8-a886-68faa7ffcc0d.jpg',
      traits: ['Активные', 'Разговорчивые', 'Умные']
    }
  ];

  const careItems = [
    {
      icon: 'Heart',
      title: 'Питание',
      description: 'Сбалансированный рацион с качественным кормом 2-3 раза в день'
    },
    {
      icon: 'Sparkles',
      title: 'Уход за шерстью',
      description: 'Регулярное расчёсывание, купание при необходимости'
    },
    {
      icon: 'Activity',
      title: 'Игры и активность',
      description: 'Минимум 30 минут активных игр каждый день'
    },
    {
      icon: 'Stethoscope',
      title: 'Ветеринар',
      description: 'Плановые осмотры и вакцинация раз в год'
    }
  ];

  const faqItems = [
    {
      question: 'Как часто нужно кормить взрослую кошку?',
      answer: 'Взрослую кошку достаточно кормить 2-3 раза в день. Важно соблюдать режим и не перекармливать питомца.'
    },
    {
      question: 'Нужно ли выгуливать домашнюю кошку?',
      answer: 'Домашним кошкам прогулки не обязательны. Достаточно обеспечить активные игры дома и доступ к окну.'
    },
    {
      question: 'Как приучить котёнка к лотку?',
      answer: 'Ставьте котёнка в лоток после сна и еды. Хвалите за успехи. Обычно котята быстро приучаются.'
    },
    {
      question: 'Какую температуру любят кошки?',
      answer: 'Комфортная температура для кошек — 20-25°C. Они любят тепло и часто ищут солнечные места.'
    },
    {
      question: 'Сколько живут домашние кошки?',
      answer: 'При правильном уходе домашние кошки живут 12-18 лет, некоторые породы до 20 лет.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span className="text-4xl">🐱</span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                КотоМир
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Породы', 'Галерея', 'Уход', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Всё о котиках
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Откройте удивительный мир кошек — узнайте о породах, правильном уходе и особенностях этих прекрасных созданий
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('породы')} className="animate-scale-in">
                <Icon name="Cat" className="mr-2" size={20} />
                Узнать о породах
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')} className="animate-scale-in">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="породы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Популярные породы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждая порода уникальна своим характером и внешностью
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {breeds.map((breed, index) => (
              <Card 
                key={breed.name} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={breed.image} 
                    alt={breed.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{breed.name}</CardTitle>
                  <CardDescription className="text-base">{breed.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {breed.traits.map((trait) => (
                      <span key={trait} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {trait}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="галерея" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Галерея
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Посмотрите на этих очаровательных питомцев
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {breeds.map((breed) => (
              <Dialog key={breed.name}>
                <DialogTrigger asChild>
                  <div className="relative h-80 rounded-xl overflow-hidden cursor-pointer group">
                    <img 
                      src={breed.image} 
                      alt={breed.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-bold text-xl">{breed.name}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img src={breed.image} alt={breed.name} className="w-full rounded-lg" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="уход" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Правильный уход
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Основные аспекты заботы о вашем питомце
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careItems.map((item, index) => (
              <Card 
                key={item.title}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на популярные вопросы о кошках
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-xl px-6 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Есть вопросы? Напишите нам!
          </p>
          <Card className="p-8 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input placeholder="Иван Иванов" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="example@mail.com" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Ваше сообщение..." rows={5} />
              </div>
              <Button size="lg" className="w-full">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🐱</span>
            <span className="text-2xl font-bold">КотоМир</span>
          </div>
          <p className="text-background/70 mb-6">
            Всё о кошках — породы, уход, советы
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-background hover:text-background/80">
              <Icon name="Twitter" size={24} />
            </Button>
          </div>
          <p className="text-sm text-background/50">
            © 2025 КотоМир. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
