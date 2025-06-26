import { Spinner } from './spinner';

export function FullPageSpinner() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <Spinner className="h-10 w-10 text-white" />
        </div>
    );
} 