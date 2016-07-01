﻿/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 16.1.20161.2052
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Barcode) {
	    $.ig.Barcode = {
		    locale: {
			    aILength: "AI трябва да се състои от поне 2 цифри.",
			    badFormedUCCValue: "Данните за UCC баркода не са зададени коректно. Трябва да имат следния формат: (AI)GTIN.",
			    code39_NonNumericError: "Символът '{0}' не е валиден за CODE39 данни. Валидните символи са: {1}",
			    countryError: "Грешка при конвертирането на кода на страната. Трябва да е числова стойност.",
			    emptyValueMsg: "Стойността на Data е празна.",
			    encodingError: "Грешка при конвертирането. Направете справка в документацията за валидните стойности на свойствата.",
			    errorMessageText: "Невалидна стойност! Направете справка в документацията за валидната структура на данните за баркода.",
			    gS1ExMaxAlphanumNumber: "GS1 DataBar Expanded семейството може да кодира до 41 буквено-цифрови знаци.",
			    gS1ExMaxNumericNumber: "GS1 DataBar Expanded семейството може да кодира до 74 цифрови знаци.",
			    gS1Length: "Data свойството на GS1 DataBar се използва за GTIN - 8, 12, 13, 14 и дължината му трябва да бъде 7, 11, 12 or 13. Последната цифра е резервирана за контролна сума.",
			    gS1LimitedFirstChar: "Първата цифра на GS1 DataBar Limited трябва да е 0 или 1. При кодиране на GTIN-14 Data Structures със стойност на Indicator по-голяма от 1, трябва да се използва един от следните типове баркод: Omnidirectional, Stacked, Stacked Omnidirectional или Truncated.",
			    i25Length: "Interleaved2of5 баркодът трябва да има четен брой цифри. Може да се сложи 0 в началото, ако броят им е нечетен.",
			    intelligentMailLength: "Дължината на данните на Intelligent Mail баркода трябва да е 20, 25, 29 или 31 знака - 20 цифри за кода за проследяване (2 за баркод идентификатор, 3 за идентификатор на типа на услугата, 6 или 9 за идентификатор на системата за изпращане и 9 или 6 за сериен номер) и 0, 5, 9 или 11 пощенски код символи.",
			    intelligentMailSecondDigit: "Втората цифра трябва да е между 0 и 4 включително.",
			    invalidAI: "Невалидни низове за елементите на Application Identifier. Проверете дали низът от данни е правилно форматиран.",
			    invalidCharacter: "Знакът '{0}' е невалиден за текущия тип баркод. Валидните символи са: {1}",
			    invalidDimension: "Размерите на баркода не могат да бъдат определени поради невалидна комбинация на стойностите на Stretch, BarsFillMode и XDimension свойствата.",
			    invalidHeight: "Даденият брой редове на баркод мрежата ({0}) не могат да се поместят в дадената височина ({1} пиксели).",
			    invalidLength: "В Data на баркода трябва да има {0} цифри.",
			    invalidPostalCode: "Невалидна стойност на PostalCode - в режим 2 могат да бъдат кодирани пощенски кодове с максимум 9 цифри (пощенски кодове от САЩ), докато в режим 3 могат да се кодират максимум 6 буквено-цифрови знака.",
			    invalidPropertyValue: "Стойността на свойството {0} трябва да е между {1} и {2} включително.",
			    invalidVersion: "Числото, зададено в SizeVersion не позволява да се генерират достатъчно клетки, за да се кодират данните с текущия режим на кодиране и ниво на корекция на грешките.",
			    invalidWidth: "Даденият брой колони на баркод мрежата ({0}) не могат да се поместят в дадената широчина ({1} пиксели). Провери стойността на свойствата XDimension и/или WidthToHeightRatio.",
			    invalidXDimensionValue: "Стойността на XDimension трябва да е от {0} до {1} за текущия тип баркод.",
			    maxLength: "Дължината {0} на текста надхвърля максималното допустимо за кодиране при текущия тип баркод. Може да кодира мсксимум {1} знака.",
			    notSupportedEncoding: "Кодирането съответстващо на {0} {1} не се поддържа.",
			    pDF417InvalidRowsColumnsCombination: "Думите за кодиране (данни и корекция на грешки) надвишават допустимото количество, което може да бъде кодирано със символна матрица {0}x{1}.",
			    primaryMessageError: "Невъзможно е да се извлече основното съобщение от стойността в Data. Направете справка в документацията за правилната структура.",
			    serviceClassError: "Грешка при конвертиране на сървис класа. Трябва да е числова стойност.",
			    smallSize: "Невъзможно е да се вмести мрежа със Size({0}, {1}) при зададените Stretch настройки.",
			    unencodableCharacter: "Знакът '{0}' не може да бъде кодиран.",
			    uPCEFirstDigit: "Първата UPCE цифра трябва винаги да бъде нула според спецификацията.",
			    warningString: "Баркод предупреждение: ",
			    wrongCompactionMode: "Съобщението в Data не може да бъде уплътнено в режим {0}.",
                notLoadedEncoding: "Кодирането {0} не е заредено."
		    }
	    };
    }
})(jQuery);