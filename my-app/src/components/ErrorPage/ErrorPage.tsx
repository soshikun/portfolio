import { useRouteError } from "react-router-dom";
import React from "react";
import { ErrorPageContainer } from './styles.ts';

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <ErrorPageContainer>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </ErrorPageContainer>
    )
}