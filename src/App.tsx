import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div className={"App"}>


            <Rating value={ratingValue} setRatingValue={setRatingValue}/>

            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My Friends"}/>*/}
            {/*Article 1*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 1*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledRating />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
