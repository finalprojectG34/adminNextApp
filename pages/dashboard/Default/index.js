import {useEffect, useState} from 'react';

// material-ui
import {Grid} from '@mui/material';
import {gridSpacing} from '../../../store/customization/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        1
                        {/*<EarningCard isLoading={isLoading} />*/}
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        2
                        {/*<TotalOrderLineChartCard isLoading={isLoading} />*/}
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                3
                                {/*<TotalIncomeDarkCard isLoading={isLoading} />*/}
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                4
                                {/*<TotalIncomeLightCard isLoading={isLoading} />*/}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;