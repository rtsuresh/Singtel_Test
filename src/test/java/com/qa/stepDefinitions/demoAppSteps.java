package com.qa.stepDefinitions;
import com.qa.pages.ToDoMVCHome;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class demoAppSteps {
    ToDoMVCHome ToDoMVCHome = new ToDoMVCHome();

    @Given("I want to add items into TO DO list")
    public void i_want_to_add_items_into_TO_DO_list() throws Exception {
        ToDoMVCHome.checkEmptyTextBox();
    }

    @When("I enter a TO DO item text {string}")
    public void i_enter_a_to_do_item_text(String strItemText) throws Exception {
        ToDoMVCHome.createEntryToDoList(strItemText);
    }

    @Then("I check if the item {string} is displayed in the TO DO list")
    public void I_check_if_the_item_is_displayed_in_the_to_do_list(String strItemText) throws Exception {
        ToDoMVCHome.checkItemAddedinList(strItemText);
    }

    @Given("I have added item {string} in TO DO list")
    public void i_have_added_item_in_TO_DO_list(String strItemText) {
        ToDoMVCHome.checkEmptyTextBox();
        ToDoMVCHome.createEntryToDoList(strItemText);
        ToDoMVCHome.checkItemAddedinList(strItemText);
    }

    @When("I click on a TO DO item text {string}")
    public void i_click_on_a_TO_DO_item_text(String strItemText) {
        ToDoMVCHome.clickItemAddedinList(strItemText);
    }

    @Then("I check if the added item {string} is completed in the TO DO list")
    public void i_check_if_the_added_item_is_completed_in_the_TO_DO_list(String strItemText) {
        ToDoMVCHome.checkCompletedItem(strItemText);
    }


    @When("I clear a TO DO item text {string}")
    public void i_clear_a_TO_DO_item_text(String strItemText) {
        ToDoMVCHome.clearItemAddedinList(strItemText);
    }

    @Then("I check if the added item {string} is removed in the TO DO list")
    public void i_check_if_the_added_item_is_removed_in_the_TO_DO_list(String strItemText) {
        ToDoMVCHome.validateClearedItem(strItemText);
    }

    @Then("I filter by Active")
    public void i_filter_by_active() {
        ToDoMVCHome.filterBy("Active");
    }

    @Then("I filter by Completed")
    public void i_filter_by_completed() {
        ToDoMVCHome.filterBy("Completed");
    }




}



