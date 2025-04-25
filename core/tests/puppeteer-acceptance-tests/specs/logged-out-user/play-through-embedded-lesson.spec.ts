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
 * @fileoverview Acceptance test for checking if a logged-out user
 * can play through embedded lessons.
 */

import {UserFactory} from '../../utilities/common/user-factory';
import testConstants from '../../utilities/common/test-constants';
import {LoggedOutUser} from '../../utilities/user/logged-out-user';
import {ConsoleReporter} from '../../utilities/common/console-reporter';

const DEFAULT_SPEC_TIMEOUT_MSECS = testConstants.DEFAULT_SPEC_TIMEOUT_MSECS;

describe('Logged-out User', function () {
  let loggedOutUser: LoggedOutUser;

  beforeAll(async function () {
    loggedOutUser = await UserFactory.createLoggedOutUser();
  }, DEFAULT_SPEC_TIMEOUT_MSECS);

  it(
    'should be able to play embedded lesson and change the language by returning to the introduction page.',
    async function () {
      await loggedOutUser.embedThisLesson();
      await loggedOutUser.changeLessonLanguage();
    }, DEFAULT_SPEC_TIMEOUT_MSECS
  );

  it(
    'should be able to navigate to previously-played cards.',
    async function () {
      await loggedOutUser.goBackToPreviousCard();
    }, DEFAULT_SPEC_TIMEOUT_MSECS
  );

  it(
    'should not be able to answer a previously-answered question.',
    async function () {
     await loggedOutUser.verifyCannotnswerPrevioulyAnsreQuestion();
    }, DEFAULT_SPEC_TIMEOUT_MSECS
  );

  it(
    'should be able to use concept cards and hints wherever provided.',
    async function () {
      //await loggedOutUser.<enter function>();
      //await loggedOutUser.<enter function>();
    }, DEFAULT_SPEC_TIMEOUT_MSECS
  );

  it(
    'should be able to view all the previous responses to any question.',
    async function () {
      //await loggedOutUser.<enter function>();
      //await loggedOutUser.<enter function>();
    }, DEFAULT_SPEC_TIMEOUT_MSECS
  );

  it(
    'should be able to restart the exploration upon refreshing the page.',
    async function () {
      await loggedOutUser.<enter function>();
      await loggedOutUser.<enter function>();
    }, DEFAULT_SPEC_TIMEOUT_MSECS
  );

  it(
    'should receive a confirmation via a toast message upon completeing the exploration.',
    async function () {
      await loggedOutUser.expectExplorationCompletionToastMessage(await this.page.waitForSelector(explorationCompletionToastMessage);();
      await loggedOutUser.<enter function>();
    }, DEFAULT_SPEC_TIMEOUT_MSECS
  );

  afterAll(async function () {
    await UserFactory.closeAllBrowsers();
  });
});
           
