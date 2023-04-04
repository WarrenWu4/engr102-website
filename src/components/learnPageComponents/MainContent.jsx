import "./MainContent.css";
import units from "../../units.json";
import { NavLink } from "react-router-dom";


export default function MainContent(props) {

    let title = ""
    let objectives = []
    units.units.map((unit) =>
        {if (props.unit === unit.num){
            title = unit.title;
        }}
    )
    units.units.map((unit) => 
        {
            unit.objectives.map((objective) => {
                if (unit.num === props.unit) {
                    objectives.push(
                    <NavLink to="/learn/objectives/view" state={{objective}}>
                    <div className="objective-container">
                        <div className="check"></div>
                        <div className="objective-text">
                            <div className="objective-title">{objective.title}</div>
                            <div className="objective-pages">{objective.pages.length} Pages</div>                   
                        </div>
                    </div>
                    </NavLink>)
                }
            })
        }
    )
    console.log(objectives);

    return (
        <div className="maincontent-container">
            <div className="maincontent-title">{title}</div>
            <div className="maincontent-objectives">
                {objectives}
            </div>
        </div>
    );
}