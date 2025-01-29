import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import LinksPanel from "./LinksPanel";

const ObjectDataPanel = () => {
    return (
        <Box marginTop={1}>
            <Stack direction={{xs: "column", sm: "row"}} justifyContent={"space-between"}>
                <Typography flex={3}>
                    Дата постройки: 1869<br/>
                    Архитектор: неизвестен<br/>
                    Жанр: деревянная архитектура<br/>
                    Тип: жилой дом на одну семью<br/>
                    Адрес: Ярославская обл., село Высокое, ул.Комсомольская 6<br/>
                    Добавлено: 28.01.2025<br/><br/>
                    Составными частями крестьянской избы были: клеть, сени, изба, подклеть, чулан и горница.
                    Основной постройкой было жилое помещение с печью. Внутри находились такие неотъемлемые атрибуты
                    хозяйской жизни как: прикрепленные к стенам широкие лавки, полки, люлька, посудный шкаф и др.
                    Отсутствие лишних элементов и строгая привязанность одной вещи к месту – вот главные признаки
                    интерьера избы.

                </Typography>
                <LinksPanel/>
            </Stack>
        </Box>
    );
};

export default ObjectDataPanel;