function aboba() {
    const student = {
        name: "",
        lastName: "",
    };

    student.name = prompt("Enter your Name");
    student.lastName = prompt("Enter your lastName");
    student.table = {};

    while (true) {
        const subject = prompt("subject");
        const mark = prompt("mark");
        if (!subject && !mark) break;
        student.table[subject] = mark;
    }

    let count = 0, average = 0;

    for (let key in student.table) {
        if ((student.table[key]) < 4)
        ++count;
    }

    count < 1 && alert(student.lastName + ' ' + student.name + ' переведен на следующий курс.');

    for (let key in student.table) {
        average += student.table[key];
    }

    average/Object.keys(student.table).length > 7 && alert(student.lastName + ' ' + student.name + ' назначена стипендия.');
}

aboba();
