package com.qa.pages;

import com.qa.util.TestBase;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class ToDoMVCHome {
    WebElement ToDoTextEntryBox;
    WebElement ToDoList;
    WebElement FilterAll;
    WebElement FilterActive;
    WebElement FilterCompleted;

    public ToDoMVCHome(){
        ToDoTextEntryBox = TestBase.driver.findElement(By.xpath("//input[@placeholder= 'What needs to be done?']"));
        ToDoList = TestBase.driver.findElement(By.xpath("//ul[@class= 'todo-list']"));
    }

    public void checkEmptyTextBox(){
        boolean isTextBoxEmpty = false;
        String BaseText = ToDoTextEntryBox.getText();
        if(BaseText.equalsIgnoreCase(""))
        {
            isTextBoxEmpty = true;
        }
        assertThat(isTextBoxEmpty,is(true));
    }


    public void createEntryToDoList(String strToDoItem){
        ToDoTextEntryBox.sendKeys(strToDoItem);
        ToDoTextEntryBox.sendKeys(Keys.RETURN);
    }


    public void checkItemAddedinList(String strToDoItem){
        boolean isItemAdded = false;
        isItemAdded  = ToDoList.findElement(By.xpath("//label[text()='"+strToDoItem+"']")).isDisplayed();
        assertThat(isItemAdded,is(true));
    }

    public void clickItemAddedinList(String strToDoItem) {
        boolean isItemClicked = false;
        TestBase.driver.findElement(By.xpath("//label[text()='"+strToDoItem+"']/../input[@type='checkbox']")).click();
        isItemClicked = true;
        assertThat(isItemClicked,is(true));
    }

    public void clearItemAddedinList(String strToDoItem) {
        //Instantiate Action Class
        Actions actions = new Actions(TestBase.driver);
        WebElement addedText = TestBase.driver.findElement(By.xpath("//label[text()='"+strToDoItem+"']"));
        actions.moveToElement(addedText).perform();
        System.out.println("Done hover on added text");
        TestBase.driver.findElement(By.xpath("//label[text()='"+strToDoItem+"']/../button[@class='destroy']")).click();
     }

    public void validateClearedItem(String strToDoItem) {
        boolean isItemClear = false;
        try {
            ToDoList.findElement(By.xpath("//label[text()='" + strToDoItem + "']")).isDisplayed();
        }
        catch(NoSuchElementException e)
        {
            isItemClear = true;
        }
        assertThat(isItemClear,is(true));
    }

    public void checkCompletedItem(String strToDoItem) {
        boolean isItemPresent = false;
        String strClass=  ToDoList.findElement(By.xpath("//label[text()='" + strToDoItem + "']/../..")).getAttribute("class");
        if(strClass.equalsIgnoreCase("todo completed"))
        {
            isItemPresent = true;
        }
        assertThat(isItemPresent,is(true));
    }

}
