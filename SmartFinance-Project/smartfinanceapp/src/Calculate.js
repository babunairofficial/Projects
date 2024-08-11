export const handleSubmit = async (e, addUser) => {
    e.preventDefault();
    const monthlySalary = document.getElementById('monthlySalary').value;
    const rent = document.getElementById('rent').value;
    const foodExpenses = document.getElementById('foodExpenses').value;
    const travelExpenses = document.getElementById('travelExpenses').value;
    const utilityBills = document.getElementById('utilityBills').value;
  
    try {
      await addUser({       
        monthlySalary,
        rent,
        foodExpenses,
        travelExpenses,
        utilityBills,
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };