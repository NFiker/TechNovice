import { FaCheck, FaTimes } from 'react-icons/fa';
import Button from '../reusable-ui/Button';

export default function TesterComponents() {
    return (
        <div className="p-8 space-y-4">
            <Button label="Primary Button" version="primary" onClick={() => alert('Primary clicked!')} />
            <Button
                label="Success Button"
                version="success"
                onClick={() => alert('Success clicked!')}
                Icon={<FaCheck />}
            />
            <Button
                label="Danger Button"
                version="danger"
                onClick={() => alert('Danger clicked!')}
                Icon={<FaTimes />}
            />
            <Button label="Disabled Button" version="primary" disabled={true} />
        </div>
    );
}
