import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function CalLinks() {

    return (
        <div className='flex gap-4'>
            <MobileNav />
            <DesktopNav />
        </div>
    )
}
