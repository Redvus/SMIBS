ymaps.ready(init);

	function init() {
		var mapGeography = new ymaps.Map("mapGeography", {
		center: [53.225631, 50.180304],
		zoom: 12,
		type: "yandex#map",
	});

	// Центральная городская библиотека им. Н.К. Крупской
	var libraryCenter = new ymaps.Placemark([53.202268, 50.116101], {
		iconContent: "Центральная городская библиотека им. Н.К. Крупской",
		hintContent: "Россия, Самара, ул. Маяковского, 19,<br>Руководитель: Чуваева Валентина Александровна<br>Телефоны: 242-42-91<br>Время работы: Пн. – вт., чт. – пт., вс. с 11 ч. - 19 ч. Среда с 11 ч. – 20 ч. Выходной: суббота."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №1
	var library1 = new ymaps.Placemark([53.203435, 50.164389], {
		iconContent: "Библиотека №1",
		hintContent: "Россия, Самара, пр. К. Маркса, 165<br>Руководитель: Котляр Галина Яковлевна<br>Телефоны: 260-42-53, 264-16-59<br>Время работы: Пн. – ср., пт., вс. с 11 ч. - 19 ч. Четверг с 11 ч. – 20 ч. Выходной: суббота."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №2
	var library2 = new ymaps.Placemark([53.233068, 50.186660], {
		iconContent: "Библиотека №2",
		hintContent: "Россия, Самара, ул. Ново-Садовая, 287<br>Руководитель: Левина Светлана Ивановна<br>Телефоны: 928-35-99, 926-14-06<br>Время работы: с 11 до 19 ч. Выходные: пятница, суббота."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №3
	var library3 = new ymaps.Placemark([53.188035, 50.127003], {
		iconContent: "Библиотека №3",
		hintContent: "Россия, Самара, ул. Красноармейская, 135<br>Руководитель: Цыганова Надежда Викторовна<br>Телефоны: <br>Время работы:с 11 до 19 ч. Выходные: Вт., Ср., Пт., Сб., Вс."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №4
	var library4 = new ymaps.Placemark([53.144991, 50.046717], {
		iconContent: "Библиотека №4",
		hintContent: "Россия, Самара, ул. Флотская, 17<br>Руководитель: Сайко Ольга Геннадьевна<br>Телефоны: 263-90-73<br>Время работы: с 11 до 19 ч. Выходные: Пт., Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №5
	var library5 = new ymaps.Placemark([53.190507, 50.177180], {
		iconContent: "Библиотека №5",
		hintContent: "Россия, Самара, ул. Аэродромная, 9<br>Руководитель: Горбунова Елена Викторовна<br>Телефоны: 268-22-07, 264-84-02<br>Время работы: Пн., ср - пт, вс. с 11 ч. - 19 ч. Вторник с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №6
	var library6 = new ymaps.Placemark([53.174007, 50.192389], {
		iconContent: "Библиотека №6",
		hintContent: "Россия, Самара, ул. Гродненская, 1<br>Руководитель: Корчагина Татьяна Валентиновна<br>Телефоны: 261-03-35<br>Время работы: с 11 до 19 ч. Выходной: Суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №7
	var library7 = new ymaps.Placemark([53.196618, 50.137007], {
		iconContent: "Библиотека №7",
		hintContent: "Россия, Самара, ул. Владимирская, 34<br>Руководитель: Ткаченко Юлия Владимировна<br>Телефоны: 336-64-00<br>Время работы: с 11 до 19 ч. Выходные: Пт., Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №8
	var library8 = new ymaps.Placemark([53.213547, 50.157955], {
		iconContent: "Библиотека №8",
		hintContent: "Россия, Самара, ул. Николая Панова, 30<br>Руководитель: Цаль Наталья Александровна<br>Телефоны: 334-68-84, 334-79-31<br>Время работы: Пн., ср - пт, вс. с 11 ч. - 19 ч. Вторник с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №9
	var library9 = new ymaps.Placemark([53.185363, 50.099070], {
		iconContent: "Библиотека №9",
		hintContent: "Россия, Самара, ул. Ленинградская, 73А<br>Руководитель: Лупинос Татьяна Александровна<br>Телефоны: 221-23-93<br>Время работы: с 11 до 19 ч. Выходные: Пт., Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №10
	var library10 = new ymaps.Placemark([53.101627, 50.032963], {
		iconContent: "Библиотека №10",
		hintContent: "Россия, Самара, ул. Фестивальная, 4<br>Руководитель: Артгалиева Надежда Николаевна<br>Телефоны: 377-50-20<br>Время работы: с 11 до 19 ч. <br>Выходные: пятница, суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №11
	var library11 = new ymaps.Placemark([53.192963, 50.196316], {
		iconContent: "Библиотека №11",
		hintContent: "Россия, Самара, ул. Аэродромная, 58<br>Руководитель: Тихонова Ирина Юрьевна<br>Телефоны: 268-53-30, 266-71-13<br>Время работы: Пн. – вт., чт. – пт., вс. с 11 ч. - 19 ч. Среда с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №12
	var library12 = new ymaps.Placemark([53.216636, 50.221726], {
		iconContent: "Библиотека №12",
		hintContent: "Россия, Самара, ул. ХXII Партсъезда, 56<br>Руководитель: Валеева Анна Галимзяновна<br>Телефоны: 995-15-26<br>Время работы: Вт. – пт., вс. с 11 ч. - 19 ч. Понедельник с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №13
	var library13 = new ymaps.Placemark([53.211040, 50.190752], {
		iconContent: "Библиотека №13",
		hintContent: "Россия, Самара, ул. Авроры, 201<br>Руководитель: и.о. Воробьёва Евгения Леонидовна<br>Телефоны: 224-60-56<br>Время работы: c 11 до 19 ч. Выходные: Пт, Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №14
	var library14 = new ymaps.Placemark([53.196077, 50.210682], {
		iconContent: "Библиотека №14",
		hintContent: "Россия, Самара, ул. Футболистов, 3<br>Руководитель: Петрова Наталья Петровна<br>Телефоны: 261-63-73<br>Время работы: Пн., ср. – пт., вс. с 11 ч. - 19 ч. Вторник с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №15
	var library15 = new ymaps.Placemark([53.233873, 50.274942], {
		iconContent: "Библиотека №15",
		hintContent: "Россия, Самара, ул. Республиканская, 59<br>Руководитель: Баранчикова Татьяна Ивановна<br>Телефоны: 958-11-54, 931-87-72<br>Время работы: Вт. – пт., вс. с 11 ч. - 19 ч. Понедельник с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №16
	var library16 = new ymaps.Placemark([53.217770, 50.261327], {
		iconContent: "Библиотека №16",
		hintContent: "Россия, Самара, ул. Краснодонская, 13<br>Руководитель: Кузнецова Светлана Викторовна<br>Телефоны: 995-66-21, 927-63-06<br>Время работы: Пн. – ср., пт., вс. с 11 ч. - 19 ч. Четверг с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №17
	var library17 = new ymaps.Placemark([53.237752, 50.225023], {
		iconContent: "Библиотека №17",
		hintContent: "Россия, Самара, ул. Стара-Загора, 106<br>Руководитель: Шабанова Майрам Катибовна<br>Телефоны: 953-45-61<br>Время работы: с 11 до 19 ч. Выходной: Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №18
	var library18 = new ymaps.Placemark([53.237359, 50.215555], {
		iconContent: "Библиотека №18",
		hintContent: "Россия, Самара, ул. Фадеева, 67<br>Руководитель: Полухина Светлана Владимировна<br>Телефоны: 951-80-59<br>Время работы: с 11 до 19 ч. Выходной: Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №19
	var library19 = new ymaps.Placemark([53.266251, 50.221252], {
		iconContent: "Библиотека №19",
		hintContent: "Россия, Самара, ул. Демократическая, 33<br>Руководитель: Рогова Ольга Алексеевна<br>Телефоны: 952-87-45<br>Время работы: Пн. – вт., чт. – пт., вс. с 11 ч. - 19 ч. Среда с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №20
	var library20 = new ymaps.Placemark([53.254491, 50.226158], {
		iconContent: "Библиотека №20",
		hintContent: "Россия, Самара, ул. Московское Шоссе, 284<br>Руководитель: Лохматова Любовь Николаевна<br>Телефоны: 925-63-15<br>Время работы: с 11 до 19 ч. Выходные: Пт., Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №21
	var library21 = new ymaps.Placemark([53.251428, 50.238875], {
		iconContent: "Библиотека №21",
		hintContent: "Россия, Самара, ул. Георгия Димитрова, 7<br>Руководитель: Богатырева Татьяна Анатольевна<br>Телефоны: 956-86-51, 956-86-48<br>Время работы: с 11 ч. до 19 ч., четв.: 11 ч.-20 ч. Выходной: Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №22
	var library22 = new ymaps.Placemark([53.247722, 50.337521], {
		iconContent: "Библиотека №22",
		hintContent: "Россия, Самара, ул. Транзитная, 71<br>Руководитель: Шалутова Галина Александровна<br>Телефоны: 226-12-18<br>Время работы: 11 до 19 ч. Выходные: Пт., Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №23
	var library23 = new ymaps.Placemark([53.228813, 50.257648], {
		iconContent: "Библиотека №23",
		hintContent: "Россия, Самара, ул. Севастопольская, 53<br>Руководитель: Кудряшова Елена Геннадьевна<br>Телефоны: 995-40-63<br>Время работы: Пн. – вт., чт. – пт., вс. с 11 ч. - 19 ч. Среда с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №24
	var library24 = new ymaps.Placemark([53.136517, 50.126182], {
		iconContent: "Библиотека №24",
		hintContent: "Россия, Самара, ул. Спутника, 10<br>Руководитель:<br>Телефоны: 330-17-09<br>Время работы: с 11 до 19 ч. Выходные: Пт., Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №25
	var library25 = new ymaps.Placemark([53.244907, 50.253426], {
		iconContent: "Библиотека №25",
		hintContent: "Россия, Самара, пр. Карла Маркса, 452<br>Руководитель: Гагарина Ирина Викторовна<br>Телефоны: 958-89-66<br>Время работы: Пн., ср. – пт., вс. с 11 ч. - 19 ч. Вторник с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №26
	var library26 = new ymaps.Placemark([53.149234, 50.136944], {
		iconContent: "Библиотека №26",
		hintContent: "Россия, Самара, пер. Сиреневый, 7<br>Руководитель: Луконина Надежда Михайловна<br>Телефоны: 340-83-49<br>Время работы: с 11 до 19 ч.<br>Выходные: пятница суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №27
	var library27 = new ymaps.Placemark([53.248891, 50.310133], {
		iconContent: "Библиотека №27",
		hintContent: "Россия, Самара, ул. Магистральная, 135<br>Руководитель: Бобикова Елена Николаевна<br>Телефоны: 931-16-59<br>Время работы: Пн. – чт., вс. с 11 ч. - 19 ч. Выходной: пятница, суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №28
	var library28 = new ymaps.Placemark([53.346935, 50.227287], {
		iconContent: "Библиотека №28",
		hintContent: "Россия, Самара, ул. Сергея Лазо, 46<br>Руководитель: Соколова Татьяна Константиновна<br>Телефоны: 950-04-39, 950-64-09<br>Время работы: Пн., ср. – пт., вс. с 11 ч. - 19 ч. Вторник с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №29
	var library29 = new ymaps.Placemark([53.383257, 50.173447], {
		iconContent: "Библиотека №29",
		hintContent: "Россия, Самара, пос. Красная Глинка, квартал 2, дом 2<br>Руководитель: Черных Людмила Николаевна<br>Телефоны: 973-95-72<br>Время работы: с 11 до 19 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №30
	var library30 = new ymaps.Placemark([53.304525, 50.274505], {
		iconContent: "Библиотека №30",
		hintContent: "Россия, Самара, пос. Мехзавод квартал 15, дом 3<br>Руководитель: Кириленко Светлана Владимировна<br>Телефоны: 957-06-89, 957-18-99<br>Время работы: Пн. - чт., вс. с 11 ч. - 19 ч. Выходной: пятница, суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №31
	var library31 = new ymaps.Placemark([53.484570, 49.853708], {
		iconContent: "Библиотека №31",
		hintContent: "Россия, Самара, ул. Труда, 10<br>Руководитель: Козлова Анна Анатольевна<br>Телефоны: 977-44-69<br>Время работы: Пн. – ср., пт., вс. с 11 ч. - 19 ч. Четверг с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №32
	var library32 = new ymaps.Placemark([53.225403, 50.209105], {
		iconContent: "Библиотека №32",
		hintContent: "Россия, Самара, ул. XXII Партсъезда, 142<br>Руководитель: Цыганова Надежда Викторовна<br>Телефоны: 951-36-44<br>Время работы: с 11 до 19. Выходные: Пн., Чт., Пт., Сб."
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №33
	var library33 = new ymaps.Placemark([53.121362, 50.088896], {
		iconContent: "Библиотека №33",
		hintContent: "Россия, Самара, Ново-Молодежный пер., 19<br>Руководитель: Останина Вера Петровна<br>Телефоны: 330-07-27<br>Время работы: Пн. – чт., вс. с 11 ч. - 19 ч. Пятница с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №34
	var library34 = new ymaps.Placemark([53.113047, 50.076487], {
		iconContent: "Библиотека №34",
		hintContent: "Россия, Самара, Молодежный пер., 21<br>Руководитель: Нефёдова Елена Михайловна<br>Телефоны: 330-07-70<br>Время работы: Пн. – ср., пт., вс. с 11 ч. - 19 ч. Четверг с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	// Библиотека №35
	var library35 = new ymaps.Placemark([53.343566, 50.215812], {
		iconContent: "Библиотека №35",
		hintContent: "Россия, Самара, ул. Симферопольская, 2<br>Руководитель: Шарипова Динара Ильдаровна<br>Телефоны: 950-26-04<br>Время работы: Пн. – пт. с 11 ч. - 19 ч. Воскресенье с 11 ч. – 20 ч. Выходной: суббота"
	}, {
		preset: "islands#redStretchyIcon"
	});

	mapGeography.geoObjects
		.add(libraryCenter)
		.add(library1)
		.add(library2)
		.add(library3)
		.add(library4)
		.add(library5)
		.add(library6)
		.add(library7)
		.add(library8)
		.add(library9)
		.add(library10)
		.add(library11)
		.add(library12)
		.add(library13)
		.add(library14)
		.add(library15)
		.add(library16)
		.add(library17)
		.add(library18)
		.add(library19)
		.add(library20)
		.add(library21)
		.add(library22)
		.add(library23)
		.add(library24)
		.add(library25)
		.add(library26)
		.add(library27)
		.add(library28)
		.add(library29)
		.add(library30)
		.add(library31)
		.add(library32)
		.add(library33)
		.add(library34)
		.add(library35)
	;
}