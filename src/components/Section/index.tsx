import { FunctionComponent, PropsWithChildren } from "react";

type Props = {
    backgroundColor: string;
};
export const Section:FunctionComponent<PropsWithChildren<Props>> = ({backgroundColor, children}) => {
    return (
        <div style={{backgroundColor, padding: 20}}>
            {children}
        </div>
    )
}
