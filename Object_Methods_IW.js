// Ability to add 3 students details and their marks in 3 subjects.
// Method to find the student with the least total.
// Method to find the student with the highest total.

let details = 
  {
    data : [],
    addStudent : function(name,english,maths,science)
      {
        obj = {};
        obj.name = name;
        obj.english = english;
        obj.maths = maths;
        obj.science = science;

        this.data.push(obj)
      },

    print : function()
             {
  console.log(this.data)
            },
    maxMarks : function()
      {
        let max = -Infinity;
        let maxStudent;
        for(let i = 0; i<this.data.length; i++)
          {
            let total = this.data[i].english +this.data[i].maths +
              this.data[i].science

            if(total > max)
            {
              max = total;
              maxStudent = this.data[i].name
            }
          }

        console.log(maxStudent,max)
        
      }
    
  }

details.addStudent("Harsh",60,70,80)
details.addStudent("sachin",40,50,60)
details.addStudent("neha",70,80,90)
details.maxMarks()