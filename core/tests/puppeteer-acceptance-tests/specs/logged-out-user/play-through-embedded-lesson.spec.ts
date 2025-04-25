// Copyright 2024 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Acceptance tests checking if a logged out user can play through an embedded lesson.
 */

import {UserFactory} from '../../utilities/common/user-factory';
import testConstants from '../../utilities/common/test-constants';
import {LoggedOutUser} from '../../utilities/user/logged-out-user;
import {ConsoleReporter} from '../../utilities/common/console-reporter';

const DEFAULT_SPEC_TIMEOUT_MSECS = testConstants.DEFAULT_SPEC_TIMEOUT_MSECS;

describe('Logged-out User', function () {
	let loggedOutUser : LoggedOutUser;

	beforeAll(async function () {
		loggedOutUser = await UserFactory.creatLoggedOutUSer()	
	},DEFAULT_SPEC_TIMEOUT_MSECS);
//1
	it(
		'should be able to play an embedded lesson in another language and chnage the language by returning to the introduction page.',
		async function () {
			//some await
		}, DEFAULT_SPEC_TIMEOUT_MSECS
	);

//2
 it(
                'should be able to play an embedded lesson in a$                async function () {
                        //some await
                }, DEFAULT_SPEC_TIMEOUT_MSECS
        );



}
)
//3
 it(
                'should be able to play an embedded lesson in a$                async function () {
                        //some await
                }, DEFAULT_SPEC_TIMEOUT_MSECS
        );

//4
 it(
                'should be able to play an embedded lesson in a$                async function () {
                        //some await
                }, DEFAULT_SPEC_TIMEOUT_MSECS
        );

//5
 it(
                'should be able to play an embedded lesson in a$                async function () {
                        //some await
                }, DEFAULT_SPEC_TIMEOUT_MSECS
        );

//6
 it(
                'should be able to play an embedded lesson in a$                async function () {
                        //some await
                }, DEFAULT_SPEC_TIMEOUT_MSECS
        );

//7
 it(
                'should be able to play an embedded lesson in a$                async function () {
                        //some await
                }, DEFAULT_SPEC_TIMEOUT_MSECS
        );

//8
 it(
                'should be able to play an embedded lesson in a$                async function () {
                        //some await
                }, DEFAULT_SPEC_TIMEOUT_MSECS
        );
afterAll(async function () {	
await UserFactory.closeAllBrowsers();});
});
