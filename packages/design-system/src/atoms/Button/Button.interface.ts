export enum TYPE {
    PRIMARY = 'primary',
    DANGER = 'danger',
    SUCCESS = 'success',
    OUTLINE = 'outline',
}
export interface ButtonProps {
    children: React.ReactNode,
    type?: `${TYPE}`
}
