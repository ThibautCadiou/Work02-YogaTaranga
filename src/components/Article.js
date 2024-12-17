import { NavLink } from 'react-router-dom';
import { Tag } from './Tag';

export function Article({ article }) {
  return (
    <NavLink className='article' to={`/articles/${article.id}`}>
      <div className='article__top'>
        <img src={article.src} alt='article 1' className='article__img' />
        <div className='article__top-tag'>
          <img
            src='./icons/book.svg'
            alt='livre au format svg'
            className='article__top-tag--logo'
          />
          <p className='article__top-tag--text'>{article.readingTime} Min</p>
        </div>
      </div>

      <div className='article__details'>
        <h3 className='article__title heading-sous-titre'>{article.name}</h3>
        <h4 className='article__subtitle common-text'>{article.text}</h4>
        <ul className='article__tag-list'>
          {/* <Tag tag={article.tags[0]} /> */}
          {article.tags.map((tag) => (
            <Tag tag={tag} key={`${tag}-${Math.random()}`} />
          ))}
        </ul>
      </div>
    </NavLink>
  );
}
