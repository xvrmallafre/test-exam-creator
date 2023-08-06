export const Menu = ({
    width = 18,
    height = 18,
}: {
    width?: number;
    height?: number;
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current" width={`${width}px`} height={`${height}px`}>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
);