export const Leaf = ({
    width = 18,
    height = 18,
    htmlClass = "",
}: {
    width?: number;
    height?: number;
    htmlClass?: string;
}) => (
    <svg class={htmlClass} width={`${width}px`} height={`${height}px`} viewBox="0 0 24 24">
        <g>
            <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4.44893 17.009C-0.246384 7.83762 7.34051 0.686125 19.5546 3.61245C20.416 3.81881 21.0081 4.60984 20.965 5.49452C20.5862 13.288 17.0341 17.7048 6.13252 17.9857C5.43022 18.0038 4.76908 17.6344 4.44893 17.009Z"></path>
            <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3.99999 21C5.50005 15.5 6 12.5 12 9.99997"></path>
        </g>
    </svg>
);