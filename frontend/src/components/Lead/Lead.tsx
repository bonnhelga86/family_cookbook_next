import { Carousel, CarouselItem, Button } from "react-bootstrap";
import { quotes } from "@/utils/qoutes";
import "./Lead.scss";

export const Lead = () => {
  return (
    <section className="lead">
      <h1 className="lead__title">Готовьте с любовью</h1>

      <Carousel
        fade
        slide={false}
        indicators={false}
        controls={false}
        interval={5000}
      >
        {quotes.map((quote) => (
          <CarouselItem key={quote.id}>
            <blockquote className="lead__quote">{quote.quote}</blockquote>
          </CarouselItem>
        ))}
      </Carousel>

      <Button size="lg" className="lead__button">
        Смотреть рецепты
      </Button>

      <div className="lead__image"></div>
    </section>
  );
};
