def count_routes(N, M):
    # Создаем двумерный массив для хранения количества способов
    # достичь каждой клетки доски
    dp = [[0] * (M + 1) for _ in range(N + 1)]

    # Инициализируем начальную позицию коня
    dp[1][1] = 1

    for i in range(2, N + 1):
        for j in range(2, M + 1):
            dp[i][j] = dp[i - 1][j - 2] + dp[i - 2][j - 1]

    return dp[N][M]


def get_board_size():
    while True:
        try:
            # Считываем размеры доски от пользователя
            N = int(input("Введите количество строк на доске (1-50): "))
            M = int(input("Введите количество столбцов на доске (1-50): "))

            # Проверяем, находятся ли размеры в пределах допустимых значений
            if 1 <= N <= 50 and 1 <= M <= 50:
                return N, M
            else:
                print("Некорректные размеры доски. Пожалуйста, введите значения от 1 до 50.")
        except ValueError:
            print("Некорректный ввод. Пожалуйста, введите целое число.")


def main():
    # Получаем размеры доски от пользователя
    N, M = get_board_size()

    # Вызываем функцию count_routes и сохраняем результат
    result = count_routes(N, M)

    # Выводим результат
    print("Количество различных маршрутов:", result)


if __name__ == "__main__":
    main()