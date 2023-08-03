export const Pantone = ({
    width = 18,
    height = 18,
    htmlClass = "",
}: {
    width?: number;
    height?: number;
    htmlClass?: string;
}) => (
    <svg class={htmlClass} width={`${width}px`} height={`${height}px`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <g>
            <path class="third-layer" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 7 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 15 C 21 13.895 20.105 13 19 13 L 16.657 13" style=""></path>
            <path class="second-layer " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 11 7.343 L 12.657 5.686 C 13.438 4.905 14.704 4.905 15.485 5.686 L 18.314 8.515 C 19.095 9.296 19.095 10.562 18.314 11.343 L 9.828 19.828" style="pointer-events: none;"></path>
            <path class="first-layer" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 7 21 C 4.791 21 3 19.209 3 17 L 3 5 C 3 3.895 3.895 3 5 3 L 9 3 C 10.105 3 11 3.895 11 5 L 11 17 C 11 19.209 9.209 21 7 21 Z M 7 17 L 7.01 17" style="pointer-events: none;"></path>
        </g>
    </svg>
);