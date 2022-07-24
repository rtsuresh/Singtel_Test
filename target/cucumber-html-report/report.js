$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/qa/features/Demo.feature");
formatter.feature({
  "name": "To Do MVC functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate adding 1 item to TO DO list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText\u003e\" is displayed in the TO DO list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ItemText"
      ]
    },
    {
      "cells": [
        "This is my first TO DO list"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate adding 1 item to TO DO list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_want_to_add_items_into_TO_DO_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my first TO DO list\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my first TO DO list\" is displayed in the TO DO list",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "screnshot of desktop");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate adding more than 1 items to TO DO list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText1\u003e\" is displayed in the TO DO list",
  "keyword": "Then "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText2\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ItemText1",
        "ItemText2"
      ]
    },
    {
      "cells": [
        "This is my first TO DO list",
        "This is my second TO DO list"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate adding more than 1 items to TO DO list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_want_to_add_items_into_TO_DO_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my first TO DO list\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my second TO DO list\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my first TO DO list\" is displayed in the TO DO list",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my second TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "screnshot of desktop");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate adding 1 item to TO DO list and completing the same",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have added item \"\u003cItemText\u003e\" in TO DO list",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on a TO DO item text \"\u003cItemText\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I check if the added item \"\u003cItemText\u003e\" is completed in the TO DO list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ItemText"
      ]
    },
    {
      "cells": [
        "This is my first TO DO list to be completed"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate adding 1 item to TO DO list and completing the same",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have added item \"This is my first TO DO list to be completed\" in TO DO list",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_have_added_item_in_TO_DO_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on a TO DO item text \"This is my first TO DO list to be completed\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_click_on_a_TO_DO_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the added item \"This is my first TO DO list to be completed\" is completed in the TO DO list",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_check_if_the_added_item_is_completed_in_the_TO_DO_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "screnshot of desktop");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate adding 1 item to TO DO list and deleting the same",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have added item \"\u003cItemText\u003e\" in TO DO list",
  "keyword": "Given "
});
formatter.step({
  "name": "I clear a TO DO item text \"\u003cItemText\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I check if the added item \"\u003cItemText\u003e\" is removed in the TO DO list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ItemText"
      ]
    },
    {
      "cells": [
        "This is my first TO DO list to be deleted"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate adding 1 item to TO DO list and deleting the same",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have added item \"This is my first TO DO list to be deleted\" in TO DO list",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_have_added_item_in_TO_DO_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear a TO DO item text \"This is my first TO DO list to be deleted\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_clear_a_TO_DO_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the added item \"This is my first TO DO list to be deleted\" is removed in the TO DO list",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_check_if_the_added_item_is_removed_in_the_TO_DO_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "screnshot of desktop");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check filter \u0027Active\u0027",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText1\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText2\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I click on a TO DO item text \"\u003cItemText1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the added item \"\u003cItemText1\u003e\" is completed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I filter by Active",
  "keyword": "Then "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText2\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ItemText1",
        "ItemText2"
      ]
    },
    {
      "cells": [
        "This is my first TO DO list",
        "This is my second TO DO list"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check filter \u0027Active\u0027",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_want_to_add_items_into_TO_DO_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my first TO DO list\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my second TO DO list\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my first TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my second TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on a TO DO item text \"This is my first TO DO list\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_click_on_a_TO_DO_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the added item \"This is my first TO DO list\" is completed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_check_if_the_added_item_is_completed_in_the_TO_DO_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter by Active",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_filter_by_active()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my second TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "screnshot of desktop");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check filter \u0027Completed\u0027",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText1\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText2\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I click on a TO DO item text \"\u003cItemText1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the added item \"\u003cItemText1\u003e\" is completed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I filter by Completed",
  "keyword": "Then "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText1\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ItemText1",
        "ItemText2"
      ]
    },
    {
      "cells": [
        "This is my first TO DO list",
        "This is my second TO DO list"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check filter \u0027Completed\u0027",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_want_to_add_items_into_TO_DO_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my first TO DO list\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my second TO DO list\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my first TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my second TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on a TO DO item text \"This is my first TO DO list\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_click_on_a_TO_DO_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the added item \"This is my first TO DO list\" is completed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_check_if_the_added_item_is_completed_in_the_TO_DO_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter by Completed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_filter_by_completed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my first TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "screnshot of desktop");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check filter \u0027All\u0027",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter a TO DO item text \"\u003cItemText2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText1\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText2\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I click on a TO DO item text \"\u003cItemText1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the added item \"\u003cItemText1\u003e\" is completed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I filter by All",
  "keyword": "Then "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText1\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.step({
  "name": "I check if the item \"\u003cItemText2\u003e\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ItemText1",
        "ItemText2"
      ]
    },
    {
      "cells": [
        "This is my first TO DO list",
        "This is my second TO DO list"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check filter \u0027All\u0027",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to add items into TO DO list",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_want_to_add_items_into_TO_DO_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my first TO DO list\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a TO DO item text \"This is my second TO DO list\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_enter_a_to_do_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my first TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my second TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on a TO DO item text \"This is my first TO DO list\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_click_on_a_TO_DO_item_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the added item \"This is my first TO DO list\" is completed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_check_if_the_added_item_is_completed_in_the_TO_DO_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter by All",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.i_filter_by_all()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my first TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if the item \"This is my second TO DO list\" is displayed in the TO DO list",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepDefinitions.demoAppSteps.I_check_if_the_item_is_displayed_in_the_to_do_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", "screnshot of desktop");
formatter.after({
  "status": "passed"
});
});