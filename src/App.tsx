import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncotontrolledAccordion";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className={"App"}>

            <Rating value={ratingValue} setRatingValue={setRatingValue}/>

            {/*<Accordion titleValue={"Menu"} collapsed={accordionCollapsed}*/}
            {/*           setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}


            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>

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


{/*<PageTitle title={"This is App component"}/>*/
}
{/*<PageTitle title={"My Friends"}/>*/
}
{/*Article 1*/
}
{/*<Accordion titleValue={"Menu"} collapsed={true}/>*/
}
{/*<Accordion titleValue={"Users"} collapsed={false}/>*/
}
{/*Article 1*/
}
{/*<Rating value={1}/>*/
}
{/*<Rating value={2}/>*/
}
{/*<Rating value={3}/>*/
}
{/*<Rating value={4}/>*/
}
{/*<Rating value={5}/>*/
}
{/*<OnOff />*/
}
{/*<OnOff />*/
}
{/*<OnOff />*/
}
// <UncontrolledAccordion titleValue={"Menu"}/>

{/*<UncontrolledRating />*/
}