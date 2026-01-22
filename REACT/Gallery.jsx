import { Profile } from './Profile.jsx'; // 1. 렌즈 공장에서 렌즈 가져오기

export default function Gallery() {
    return (
        <section>
            <Profile /> {/* 2. 렌즈 세 개 조립하기 */}
            <Profile />
            <Profile />
        </section>
    );
}