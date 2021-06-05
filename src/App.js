// 컴포넌트의 데이터를 받는방법에는 
// function Food(names)
// function Food({ name })
// 두가지 방법으로도 얻을 수 있다 바로위에방법은 받아들이는 값을 키값을 아는경우 가능

import PropTypes from "prop-types";

const foodILike = [
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function Food({ id, name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

function renderFood (dish) {
  console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

// prop-types 내가 전달받은 props가 내가 원하는 props인지 확인해준다.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
// dish라는 매개변수를 통해 매개변수 안의 키와 키값의 밸류를 출력
function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
