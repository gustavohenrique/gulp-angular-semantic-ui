describe('Demo test', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        nav.get(URL);
        //nav.sleep(500);
    });

    it('should there is one contact added', function() {
        var list = element.all(by.repeater('person in contacts'));
        expect(list.count()).toEqual(1);

        var firstRow = by.repeater('person in contacts track by person.name').row(0);
        expect(element(firstRow.column('person.name')).getText()).toEqual('Gustavo Henrique');
        expect(element(firstRow.column('person.site')).getText()).toEqual('about.me/gustavohenrique');
    });

    it('should add a person in contacts list', function() {
        element(by.model('name')).sendKeys('Uncle Bob Martin');
        element(by.model('site')).sendKeys('cleancoder.com');
        $('.primary').click();

        var list = element.all(by.repeater('person in contacts'));
        expect(list.count()).toEqual(2);

        var secondRow = by.repeater('person in contacts track by person.name').row(1);
        expect(element(secondRow.column('person.name')).getText()).toEqual('Uncle Bob Martin');
        expect(element(secondRow.column('person.site')).getText()).toEqual('cleancoder.com');
    });
    
});
