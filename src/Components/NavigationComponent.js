import '../CSS/Form.css';
import LinkComponent from "./LinkComponent";

function NavigationComponent({children}) {
    return (
        <div className="Navigation">
            <LinkComponent to={'/' + children}>
                {children}
            </LinkComponent>
            <LinkComponent to='/main'>
                main
            </LinkComponent>
        </div>
    );
}

export default NavigationComponent
