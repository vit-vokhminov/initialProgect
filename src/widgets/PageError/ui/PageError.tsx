import CN from 'classnames';
import { Button } from '@/shared/ui/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        window.location.reload();
    };

    return (
        <div className={CN(s.PageError, className)}>
            <p>Произошла непредвиденная ошибка</p>
            <Button onClick={reloadPage}>Обновить страницу</Button>
        </div>
    );
};
