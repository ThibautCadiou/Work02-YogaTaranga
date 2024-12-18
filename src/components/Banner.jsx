export default function Banner(props) {
  return (
    <div className='banner'>
      <img
        src={props.src}
        alt='bannière de la page ...'
        className={`banner__image ${props.classType}`}
      />
    </div>
  );
}
