/**
 * Copyright (C) 2018 New York University
 *                    University at Buffalo,
 *                    Illinois Institute of Technology.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Message } from 'semantic-ui-react'


/**
 * Display an error message.
 */
export const ErrorMessage = ({title, message, onDismiss}) => (
    <Message
        negative
        icon='warning sign'
        header={title}
        onDismiss={onDismiss}
        content={message != null ? message.charAt(0).toUpperCase() + message.slice(1) : "No Message"}
    />
);


/**
 * Display a list of error messages in a single message frame.
 */
export const ErrorListMessage = ({title, errors, onDismiss}) => (
    <Message
        negative
        icon='warning sign'
        header={title}
        list={errors}
        onDismiss={onDismiss}
    />
);


/**
 * Display an error message generated by a fetch request. Depending on whether
 * the error is due to an unknown resource (404) or not the error message will
 * differ.
 */
export const FetchError = ({error}) => {
    if (error.is404()) {
        return (
            <div className='not-found'>
                <NotFoundMessage message={error.message} />
            </div>
        )
    } else {
        return (<ErrorMessage
            title={error.title}
            message={error.message}
        />)
    }
}


/**
 * Display an warning message.
 */
export const WarningMessage = ({title, message, onDismiss}) => (
    <Message
        warning
        icon='warning circle'
        header={title}
        onDismiss={onDismiss}
        content={(message != null) ? ( message.charAt(0).toUpperCase() + message.slice(1) ) : "Unknown Error"}
    />
);


/**
 * Display an warning message.
 */
export const NotFoundMessage = ({message}) => (
    <Message
        floating
        icon='frown'
        header='Ooops ... 404'
        size='massive'
        content={(message != null) ? ( message.charAt(0).toUpperCase() + message.slice(1) ) : "Unknown Error" }
    />
);
